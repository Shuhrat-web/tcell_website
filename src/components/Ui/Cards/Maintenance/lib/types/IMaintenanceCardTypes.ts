import { IMaintenance, IMaintenanceCard, IMaintenanceOption } from "@/lib/requests/resources/Maintenance/lib/IMaintenance";

export interface IMaintenanceCardProps {
    maintenance: IMaintenance;
    option: IMaintenanceOption;
    card: IMaintenanceCard;
    
}