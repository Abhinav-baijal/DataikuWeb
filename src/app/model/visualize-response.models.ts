export interface Visualize {
    count : number;
    average: number;
    label: string;
}

export interface VisualizeResponse {
    
    results: Visualize[];
    totalCount: number;
    undisplayedValues: string[];
    undisplayedRowsCount: number;
    
}