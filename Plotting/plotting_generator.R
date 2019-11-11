# User should be prompted to input the following
  # Station 
  # Start date (Month & Year)
  # End date (Month & Year)

library(lubridate)
library(ggplot2)
library(DBI)
library(odbc)
library(rstudioapi)


# Load .csv file
dir <- "C:/Users/Mina/Documents/GitHub/powerpuff-girls/Resources"
path <- file.path(dir, "Data_HACC.csv")
data <- read.table(file=path, header=TRUE, sep=",")

# Initialize variables
peak_time <- c("17:00:00", "22:00:00")
mid_time <- c("09:00:00","17:00:00")
off_time <- c("22:00:00","09:00:00")

# Convert Start.Time col from factor to POSIXct
data$Start.Time <- mdy_hm(data$Start.Time)

# Split date and time
date <- as.Date(data$Start.Time)
time <- format(data$Start.Time, "%H:%M")

# Set times in on-peak, midday, and off-peak
i <- 1
for (val in time) {
  if (val >= peak_time[1] & val <= peak_time[2]) {time[i] <- "on-peak"}
  else if (val >= mid_time[1] & val <= mid_time[2]) {time[i] <- "midday"}
  else {time[i] <- "off-peak"} 
  
  i <- i+1
}

# Get month name 
full_date = months(date)

# Values for each plot
freq_val <- c(rep(1,length(data$Start.Time)))
energy_val <- data$Energy.kWh.
cost_val <- as.numeric(gsub('[$]', '', data$Session.Amount))
duration_val <- as.numeric(data$Duration)

# Plot
plot_data <- data.frame(full_date,time,freq_val)
p1 <- ggplot(plot_data, aes(fill=time, y=freq_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity")

plot_data <- data.frame(full_date,time,energy_val)
p2 <- ggplot(plot_data, aes(fill=time, y=energy_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity")

plot_data <- data.frame(full_date,time,cost_val)
p3 <- ggplot(plot_data, aes(fill=time, y=cost_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity")

plot_data <- data.frame(full_date,time,duration_val)
p4 <- ggplot(plot_data, aes(fill=time, y=duration_val, x=full_date)) + 
  geom_bar(position="stack", stat="identity")

# Save plot to picture
ggsave("frequency_plot.png", plot=p1 ,width=24,height=9,units="cm")
ggsave("energy_plot.png", plot=p2 ,width=24,height=9,units="cm")
ggsave("cost_plot.png", plot=p3 ,width=24,height=9,units="cm")
ggsave("duration_plot.png", plot=p4 ,width=24,height=9,units="cm")
