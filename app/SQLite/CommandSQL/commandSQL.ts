import Configuration from "../DBManagment/сonfiguration"

interface ICOMMAND_SQL {
    /**
     * Команда создания таблицы c именем указанным в:
     * - "Configuration.TABLE__DAYS"
     */
    createTableDays: string;
    /**
     * Команда создания таблицы c именем указанным в:
     * - "Configuration.TABLE_EXERCISE"
     */
    createTableExercise: string;
}

const COMMAND_SQL: ICOMMAND_SQL = {
    createTableDays: `
        CREATE TABLE IF NOT EXISTS ${Configuration.TABLE__DAYS}
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                day TEXT,
                img INTEGER,
                date TEXT,
                title TEXT,
                description TEXT,
                lastExercise INTEGER
            )
    `,
    createTableExercise: `
        CREATE TABLE IF NOT EXISTS ${Configuration.TABLE_EXERCISE}
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                day TEXT,
                exercise TEXT,
                title TEXT,
                description TEXT,
                weightNeck TEXT,
                weightOne TEXT,
                weightTwo TEXT,
                amount INTEGER,
                amountExercise INTEGER,
                isUp TEXT,
                img INTEGER,
                burpee INTEGER
            )
    `
}

export default COMMAND_SQL;