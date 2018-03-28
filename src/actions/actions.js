import faker from "faker";

export const addUser = () => {
    const rndUser = faker.internet.userName();

    return {
        type: 'ADD_USER',
        payload: rndUser
    }
}