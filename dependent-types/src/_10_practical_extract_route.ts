/**
 * ## Practical: Extract Routes
 * 
 * We are going to skip all discussion of how and jump straight to the bottom. 👇
 */
module ReadMe10 {}

/** 
 * - Given a string type representing a Url route
 * - Returns an object 
 *   - when the string is a literal then the object is strongly typed
 *   - otherwise 
 **/
type RouteParametersFromString<routeString extends string> =
  string extends routeString
  ? Record<string, string>
  : routeString extends `${infer _prefix}:${infer parameter}/${infer suffix}`
  ? {
      [property in parameter | keyof RouteParametersFromString<suffix>]: string
  }
  : routeString extends `${infer _prefix}:${infer parameter}`
  ? {
      [property in parameter]: string
  }
  : {};

function handleRoute<routeString extends string>(
    _route: routeString, 
    _handler: (params: RouteParametersFromString<routeString>) => void 
) {
    // do nothing, demo
}

//------------------------------------------------------------
// EXAMPLES
//------------------------------------------------------------
handleRoute(
    "my.api/person/:id",
    (params) => {
        console.log(params.id);
    }
)

handleRoute(
    "my.api/person/:person_id/address/:kind/:another",
    (params) => {
        console.log(params.person_id);
        console.log(params.kind);
    }
)

