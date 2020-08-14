exports.handler = async (event) => {
    // TODO implement
    console.log(event)
    const response = {
        avaliableTimeSlot: JSON.stringify(['9:00-10:00','11:00-12:00','13:00-14']),
    };
    return response;
};
