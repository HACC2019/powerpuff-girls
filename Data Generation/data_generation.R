dir <- "C:/Users/Ian/Documents/GitHub/powerpuff-girls/Resources"
path <- file.path(dir, "Data_HACC.csv")

data <- read.table(file=path, header=TRUE, sep=",", stringsAsFactors=FALSE)
