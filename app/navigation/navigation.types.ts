import { IDataTiket } from "../screen/DataTicket/DataTicket";
import { RouteProp } from "@react-navigation/native";

export type TypeRootPage = {
    Auth: undefined,
    Home: undefined,
    Ticket: {
        dataTiket: IDataTiket | null;
    },
    DataTicket: undefined
}

export type ScreenTiketProp = {
    route: RouteProp<TypeRootPage, 'Ticket'>
};

