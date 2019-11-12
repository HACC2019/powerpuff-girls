# User should be prompted to input the following
# Station 
# Start date (Month & Year)
# End date (Month & Year)

library(lubridate)
library(ggplot2)
library(dplyr)
library(odbc)
library(DBI)
library(RPostgres)
library(RPostgreSQL)


# User input
userStation <- "A"
userStartTime <- "2018-09-09 00:00:00"
userEndTime <- "2018-09-15 00:00:00"

# Load .csv file
#dir <- "C:/Users/Ian/Documents/GitHub/powerpuff-girls/Resources"
#path <- file.path(dir, "Data_HACC.csv")
#data <- read.table(file=path, header=TRUE, sep=",")





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
freq_val <- c(rep(1,length(Fdata$Start.Time)))
energy_val <- Fdata$Energy.kWh.
cost_val <- as.numeric(gsub('[$]', '', Fdata$Session.Amount))
duration_val <- as.numeric(Fdata$Duration)

# Plot
plot_data1 <- data.frame(full_date,time,freq_val)
p1 <- ggplot(plot_data1, aes(fill=time, y=freq_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle(paste("Station",userStation,"-- # of sessions","by time of day",sep=" "))

plot_data2 <- data.frame(full_date,time,energy_val)
p2 <- ggplot(plot_data2, aes(fill=time, y=energy_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity") + 
  ggtitle(paste("Station",userStation,"-- Energy (kwh)","by time of day",sep=" "))

plot_data3 <- data.frame(full_date,time,cost_val)
p3 <- ggplot(plot_data3, aes(fill=time, y=cost_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity") +
  ggtitle(paste("Station",userStation,"-- Gross Revenue ($)","by time of day",sep=" "))

plot_data4 <- data.frame(full_date,time,duration_val)
p4 <- ggplot(plot_data4, aes(fill=time, y=duration_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity") +
  ggtitle(paste("Station",userStation,"-- # of minutes","by time of day",sep=" "))

# Save plot to picture
ggsave("frequency_plot.png", plot=p1 ,width=24,height=9,units="cm")
ggsave("energy_plot.png", plot=p2 ,width=24,height=9,units="cm")
ggsave("cost_plot.png", plot=p3 ,width=24,height=9,units="cm")
ggsave("duration_plot.png", plot=p4 ,width=24,height=9,units="cm")
