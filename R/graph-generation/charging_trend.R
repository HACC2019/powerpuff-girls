library(lubridate)

dir <- "C:/Users/Mina/Documents/GitHub/powerpuff-girls/Resources"
path <- file.path(dir, "min2min_Data.csv")
data <- read.table(file=path, header=TRUE, sep=",")

T <- 2 # Threshold value
error <- 0
kw0 <- data$Power..kW.[1] 
flag <- 0

data$ï..Start.Date.and.Time <- mdy_hm(data$ï..Start.Date.and.Time)
errorDates <- c(rep("2000-01-01 00:00:00",length(data$ï..Start.Date.and.Time)))
errorDates <- as.POSIXct(errorDates,tz="UTC")

for (i in 1:length(data$Power..kW.)) { 
  val <- data$Power..kW.[i]
  
  if (val < .1){ # Charging inactive
    flag <- 0
    kw0 <- val
    next 
  }
  
  if (flag == 0 & val >= kw0) { # positive trend
    kw0 <- val 
    next
  }
  else if (flag == 0){ # negative trend
    flag <- 1
    kw0 <- val
    next
  }
  
    
  if (flag == 1 & val <= kw0) { # After experiencing negative trend, make sure it stays negative
    kw0 <- val
    next
  }
  else if (abs(val - kw0) > T & val > kw0){ # If trend goes back to positive and increases by more than threshold value, there was an error
    error <- error + 1
    errorDates[error] <- data$ï..Start.Date.and.Time[i]
    kw0 <- val
    next
  }
}