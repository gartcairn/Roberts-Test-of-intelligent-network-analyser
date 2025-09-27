import { Driver, Session, auth } from 'neo4j-driver';

const uri = 'bolt://localhost:7687';
const user = 'neo4j';
const password = 'your_password_here';

const driver: Driver = Driver(uri, auth.basic(user, password));

const connectToNeo4j = async (): Promise<Session> => {
    const session = driver.session();
    return session;
};

const closeConnection = async (): Promise<void> => {
    await driver.close();
};

export { connectToNeo4j, closeConnection };