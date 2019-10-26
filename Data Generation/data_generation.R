# Note: Change directory User to the computer's designated name
dir <- "C:/Users/Mina/Documents/GitHub/powerpuff-girls/Resources"
path <- file.path(dir, "Data_HACC.csv")

data <- read.table(file=path, header=TRUE, sep=",")
newData <- data
# Remove "$" from Column "Session Ammount"
newData$Session.Amount <- as.numeric(gsub('[$]', '', newData$Session.Amount))

# Create 10 generated sets
for  (i in 1:10){
  
  filename <- paste(i,"Generated_Data.csv",sep="_")
  
  for(j in 1:10452){
    rng <- rnorm(1,mean=0,sd=5) # Gaussian distributed difference with mean=0 & sd=5
    newData[j,6] <- newData[j,6] + rng
    # Clipp values at < 0 
    if(newData[j,6] < 0){
      newData[j,6] <- 0
    }
    
    newData[j,7] <- newData[j,6] * .54 # Compensate price for change in energy by a rate of $.54/kwh
    
  }
  
  # Formatting stuff
  round(newData[6],digits=2)
  round(newData[7],digits=2)

  write.csv(newData,file=filename)
}