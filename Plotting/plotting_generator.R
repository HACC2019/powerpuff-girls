# User should be prompted to input the following
  # Station 
  # Start date (Month & Year)
  # End date (Month & Year)
  # Type of plot(# of sessions, energy, gross revenue, # of minutes, or all)
    # x = 1, 2, 3, 4, 5 for each plot type respectively

library(lubridate)
library(ggplot2)

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
if (x == 1){val <- c(rep(1,length(data$Start.Time)))}
if (x == 2){val <- data$Energy.kWh.}
if (x == 3){val <- as.numeric(gsub('[$]', '', data$Session.Amount))}
if (x == 4){val <- as.numeric(data$Duration)}
  # if (x == 5) plot all 

# Plot
plot_data <- data.frame(full_date,time,i)
p <- ggplot(plot_data, aes(fill=time, y=val, x=full_date)) + 
  geom_bar(position="stack", stat="identity")
plot(p)

# Save plot to picture
ggsave("test.png", plot=last_plot(),width=24,height=9,units="cm")