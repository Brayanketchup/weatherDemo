


export default function fetchCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("returning city");
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    
                    const getStatesName = async (latitude, longitude) => {

                        try {
                            const response = await fetch(
                                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                            );
                            const data = await response.json();
                            const stateName = data.address.state;

                            return stateName;
                        } catch (error) {
                            console.error('Error getting state name:', error);
                            reject(error);
                        }
                    };

                    getStatesName(latitude, longitude)
                        .then((stateName) => {
                            resolve(stateName);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    reject(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(new Error('Geolocation is not supported'));
        }
    });
}


