const {request} = require("graphql-request");

const query = `
query MyQuery {
	chargedata {
		amount
		duration
		endtime
		energy
		starttime
		station
	}
}	
`;

getData = async () => {
	const endpoint = "https://charge-data.herokuapp.com/v1/graphql";
	let data;
	await request(endpoint, query)
		.then(incData => {
			data = incData.chargedata;
		}).catch(err => {
		        console.log(err);
		});

	// User input
	// Placeholders for now...
	userStation = "A";
	userStart = "September  2018";
	userEnd = "May 2019";
	
	userStart = new Date(userStart);
	userEnd = new Date(userEnd);

	let filteredData = data.filter((data) => {
		return data.station == userStation // will be userStation
	})

	let timePeriod = [
	       {period: "on-peak", start: 16, end: 21},
	       {period: "midday", start: 8, end: 16},
	       {period: "off-peak", start: 21, end: 8}
	];

	let timeOfDay = [];
	let months = [];
	i = 0;
	
	filteredData.forEach(row => {
		let {amount, duration, endtime, energy, starttime} = row;
	            
		let dateTime = new Date(starttime);
		
		// Time of day
		// Note: Range is 0-23
		if (dateTime.getHours() >= timePeriod[0].start && dateTime.getHours() <= timePeriod[0].end) { // Check if on-peak - val=1
		       	timeOfDay[i] = 1;
		}
		else if (dateTime.getHours() >= timePeriod[1].start && dateTime.getHours() <= timePeriod[1].end) { // Check if midday - val=2
		       	timeOfDay[i] = 2;
		}
		else { // Check if off-peak - val=3
		       	timeOfDay[i] = 3;
		}

		// Month of entry
		// Note: Range is 0-11
		months = dateTime.getMonth(); 

		starttime = new Date(starttime);
		endtime = new Date(endtime);

		i++;
	})
	
	let filteredData2 = filteredData.filter((filteredData) => {
		return filteredData.starttime >= userStart && filteredData.starttime <= userEnd 
	})

}

getData();
