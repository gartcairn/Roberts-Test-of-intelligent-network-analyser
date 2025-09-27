import { Driver, Session, auth } from 'neo4j-driver';

const uri = 'neo4j+s://fbc6c6be.databases.neo4j.io';
const user = 'neo4j';
const password = 'zihUCaElZXhpeJgg08pL61m_MR2Si8BOj3tVs_ymPRY';

const driver: Driver = Driver(uri, auth.basic(user, password));

const connectToNeo4j = async (): Promise<Session> => {
    const session = driver.session();
    return session;
};

const closeConnection = async (): Promise<void> => {
    await driver.close();
};

export { connectToNeo4j, closeConnection };


