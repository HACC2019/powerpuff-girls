# User should be prompted to input the following
# Station 
# Start date (Month & Year)
# End date (Month & Year)

library(lubridate)
library(ggplot2)
library(dplyr)
library(viridis)
library(hrbrthemes)

#library(odbc)
#library(DBI)
#library(RPostgres)
#library(RPostgreSQL)


# User input
userStation <- "A"
userStartTime <- "2018-09-01 00:00:00"
userEndTime <- "2019-08-31 00:00:00"

# Load .csv file
dir <- "C:/Users/Ian/Documents/GitHub/powerpuff-girls/Resources"
path <- file.path(dir, "Data_HACC.csv")
data <- read.table(file=path, header=TRUE, sep=",")





# Initialize variables
peak_time <- c("17:00:00", "22:00:00")
mid_time <- c("09:00:00","17:00:00")
off_time <- c("22:00:00","09:00:00")

# Filter data based on user input
Fdata <- filter(data,data$Charge.Station.Name==userStation)
# Convert Start.Time col from factor to POSIXct and then filter based on userStart & userEnd
Fdata$Start.Time <- mdy_hm(Fdata$Start.Time)
Fdata$End.Time <- mdy_hm(Fdata$End.Time)
Fdata <- filter(Fdata,Fdata$Start.Time >= as.POSIXct(userStartTime,tz="UTC") & Fdata$Start.Time<=as.POSIXct(userEndTime,tz="UTC"))

# Split date and time
date <- as.Date(Fdata$Start.Time)
time <- format(Fdata$Start.Time, "%H:%M")

# Set times in on-peak, midday, and off-peak
i <- 1
for (val in time) {
  if (val >= peak_time[1] & val <= peak_time[2]) {time[i] <- "on-peak"}
  else if (val >= mid_time[1] & val <= mid_time[2]) {time[i] <- "midday"}
  else {time[i] <- "off-peak"} 
  
  i <- i+1
}

# Get month name 
full_date = months(date, abbr=TRUE)

# Values for each plot
Sessions <- c(rep(1,length(Fdata$Start.Time)))
Energy <- Fdata$Energy.kWh.
Cost <- as.numeric(gsub('[$]', '', Fdata$Session.Amount))
Duration <- time_length(hms(Fdata$Duration),unit="minute")

# Plot
plot_data1 <- data.frame(full_date,time,Sessions)
p1 <- ggplot(plot_data1, aes(fill=time, y=Sessions, x=full_date)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle(paste("Station",userStation,"-- # of sessions","by time of day",sep=" ")) +
  scale_fill_viridis(discrete = T) + theme_ipsum() + xlab("")

plot_data2 <- data.frame(full_date,time,Energy)
p2 <- ggplot(plot_data2, aes(fill=time, y=Energy, x=full_date)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle(paste("Station",userStation,"-- Energy (kwh)","by time of day",sep=" ")) +
  scale_fill_viridis(discrete = T) + theme_ipsum() + xlab("")

plot_data3 <- data.frame(full_date,time,Cost)
p3 <- ggplot(plot_data3, aes(fill=time, y=Cost, x=full_date)) + 
  geom_bar(position="stack", stat="identity") +
  ggtitle(paste("Station",userStation,"-- Gross Revenue ($)","by time of day",sep=" ")) +
  scale_fill_viridis(discrete = T) + theme_ipsum() + xlab("")

plot_data4 <- data.frame(full_date,time,Duration)
p4 <- ggplot(plot_data4, aes(fill=time, y=Duration, x=full_date)) + 
  geom_bar(position="stack", stat="identity") +
  ggtitle(paste("Station",userStation,"-- # of minutes","by time of day",sep=" ")) +
  scale_fill_viridis(discrete = T) + theme_ipsum() + xlab("")

# Save plot to picture
ggsave("frequency_plot.png", plot=p1 )
ggsave("energy_plot.png", plot=p2 )
ggsave("cost_plot.png", plot=p3 )
ggsave("duration_plot.png", plot=p4 )
