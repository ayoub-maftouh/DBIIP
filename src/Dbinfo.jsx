import supabaseLogo from './assets/supabase.png'


function Dbinfo () {
    const dbHost="";
    const dbName="";
    const dbTables="";

    return(
        <div className="dbCards">
            <img className="dbCards-image" src={supabaseLogo} alt="Supabase logo" />
            <h2>Database Host</h2>
            <p>{dbHost}</p>
        </div>
/*        <ul>
            <li>My Database Host: {dbHost.toLocaleUpperCase}</li>
            <li>My Data base Name: {dbName}</li>
            <li>My Database Tables Number: {dbTables}</li>
        </ul>*/
    );
}
export default Dbinfo