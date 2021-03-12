/**
 * ## Practical: Fluent Builders
 */
module ReadMe12 {}

/**
 * A database configuration is either with integrated security or not. Observe that 
 * when not integrated security that additonal fields are required. 
 */
type DBConfiguration = 
    | { database: string; integratedSecurity: true} 
    | { database: string; integratedSecurity: false; userName: string; password: string } 

/** A map from environment name to DBConfiguration */
module EnvironmentDBConfigurationMap {   
    class Builder<availableEnvironments extends string, mapSoFar extends {} = {}> {

        constructor(private readonly _map: mapSoFar) {}

        /** Add a mapping for an environment. */
        forEnvironment<environmentName extends availableEnvironments, configuration extends DBConfiguration>(
            environmentName: environmentName, 
            configuration: configuration
        ): Builder<
            // remove the environmentName from this call from the list of remaining environmentNames in the subsequent builder
            Exclude<availableEnvironments, environmentName>, 
            // Add the environmentName: configuration to the type of the returned map.
            mapSoFar & { [prop in environmentName]: configuration }
        > {
            return new Builder({
                ...this._map,
                [environmentName]: configuration
            } as any);
        }

        /** Get the final environment map. */
        get result(): mapSoFar {
            return this._map;
        }
    }

    type DefaultEnvironments = "production" | "functionalTesting" | "loadTesting"
    export const builder = <environments extends string = DefaultEnvironments>() => new Builder<environments>({});
}

//------------------------------------------------------------
// EXAMPLES
//------------------------------------------------------------
const environmentConfigurationMap = EnvironmentDBConfigurationMap.builder()
    // TRY: Change integratedSecurity to false and observe the type system complain about the absence of userName and password
    .forEnvironment(
        "loadTesting", 
        { 
            database: "TiredTrisha", 
            integratedSecurity: true 
        }
    )
    //TRY: Commenting out the production configuration and watch the call of _exampleUsage_ below fail.
    .forEnvironment(
        "production", 
        { 
            database: "ProductionPatty", 
            integratedSecurity: false,
            userName: "x" ,
            password: "1"
        }
    )
    .forEnvironment(
        "functionalTesting", 
        { 
            database: "FunctionalFrita", 
            integratedSecurity: false, 
            userName: "bob.ross", 
            password: "fluffytrees1" 
        }
    )
    //Uncomment the line below and try to add another. You cannot.
    //.forEnvironment("", {database: NonEmptyString.literal("SececureSally"), integratedSecurity: true})
    .result  

// TRY: Hover over environmentConfigurationMap to see the descriptive inferred type.
//environmentConfigurationMap.
exampleUsage(environmentConfigurationMap);

function exampleUsage(config: { production: DBConfiguration; functionalTesting: DBConfiguration }) {
    console.log(`Production Database`, config.production.database);
    console.log(`Functional Database`, config.functionalTesting.database);
}