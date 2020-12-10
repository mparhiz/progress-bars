class BarService {
    getBars() {
        return fetch(`http://pb-api.herokuapp.com/bars`)
            .then(res => res.json())
            .then(data => {
                return {
                    buttons: data["buttons"],
                    bars: data["bars"].map((value, index) => {
                        return {
                            id: index,
                            defaultValue: value,
                            maxValue: data["limit"],
                            currentValue: value,
                            selected: index === 0 ? true : false
                        }
                    })
                }
            });
    };
} 

export default BarService;