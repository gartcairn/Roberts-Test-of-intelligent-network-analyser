# Intelligent Network Analyzer

## Overview
The Intelligent Network Analyzer is a project designed to monitor and analyze network devices, including routers, switches, firewalls, load balancers, and servers. It utilizes a Neo4j database to store and manage data related to these network components, providing insights into network performance and configuration.

## Project Structure
The project is organized into the following directories and files:

- **src/**: Contains the source code for the application.
  - **app.ts**: Entry point of the application, initializes Neo4j connection and application logic.
  - **config/**: Configuration files for the application.
    - **neo4j.ts**: Contains settings for connecting to the Neo4j database.
  - **models/**: Data models representing network components.
    - **router.ts**: Model for routers.
    - **switch.ts**: Model for switches.
    - **firewall.ts**: Model for firewalls.
    - **loadbalancer.ts**: Model for load balancers.
    - **server.ts**: Model for servers.
  - **data/**: JSON files containing data for network components.
    - **routers.json**: Data for 20 Cisco routers.
    - **switches.json**: Data for 15 switches.
    - **firewalls.json**: Data for 8 Fortigate firewalls.
    - **loadbalancers.json**: Data for 5 F5 load balancers.
    - **servers.json**: Data for 50 servers (10 behind each load balancer).
  - **ip-plan/**: Contains the IP addressing plan for the network.
    - **ip-addressing-plan.json**: Details the subnetting and IP address allocation.
  - **types/**: TypeScript interfaces for data models.
    - **index.ts**: Exports interfaces for Router, Switch, Firewall, LoadBalancer, and Server.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
   ```
   npm install
   ```
4. Configure the Neo4j connection settings in `src/config/neo4j.ts`.
5. Run the application:
   ```
   npm start
   ```

## Features
- Monitor and analyze network devices.
- Store and manage data in a Neo4j database.
- Provides insights into network performance and configuration.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.