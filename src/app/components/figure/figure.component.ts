import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ClimateDataApiService} from '../../services/climate-data-api.service';
import {DatePipe} from '@angular/common';
import {FigureTypeEnum} from '../../enums/figure-type-enums';

@Component({
    selector: 'app-figure',
    templateUrl: './figure.component.html',
    styleUrls: ['./figure.component.scss'],
    providers: [MessageService]
})
export class FigureComponent implements OnInit {
    static defaultFigureOptions: object = {
        legend: {
            display: true,
            position: 'top'
        },
        layout: {
            padding: {
                top: 20
            }
        }
    };

    @Input() dataType: FigureTypeEnum;
    public data: any;
    public options: any;
    private apiData: any[];
    private readonly maxDataArraySize = 300;

    private pipe: any;

    private messageService: MessageService;
    private climateDataApiService: ClimateDataApiService;

    constructor(messageService: MessageService,
                climateDataApiService: ClimateDataApiService) {
        this.messageService = messageService;
        this.climateDataApiService = climateDataApiService;
        this.pipe = new DatePipe(`en-GB`);
    }

    public ngOnInit(): void {
        this.options = {...FigureComponent.defaultFigureOptions};
        this.setFigure(this.dataType);
    }

    public setFigure(dataType: FigureTypeEnum): void {
        switch (dataType) {
            case FigureTypeEnum.TEMPERATURE_ANOMALIES: {
                this.setTemperatureFigure();
                break;
            }
            case FigureTypeEnum.CARBON_DIOXIDE_LEVEL: {
                this.setCarbonDioxideFigure();
                break;
            }
            case FigureTypeEnum.METHANE_LEVEL: {
                this.setMethaneFigure();
                break;
            }
            case FigureTypeEnum.NITROUS_OXIDE_LEVEL: {
                this.setNitrousOxideFigure();
                break;
            }
            case FigureTypeEnum.ARCTIC_ICE_MELTING: {
                this.setArcticFigure();
                break;
            }
        }
    }

    public selectData(event): void {
        this.messageService.add({
            severity: 'info', summary: 'Data Selected',
            detail: this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

    private restrictDataItems(dataset: any[]): any[] {
        if (dataset.length > this.maxDataArraySize) {
            const result = [];
            const delta = dataset.length / this.maxDataArraySize;
            for (let i = 0; i < this.maxDataArraySize; i++) {
                result.push(dataset[Math.floor(i * delta)]);
            }
            return result;
        } else {
            return dataset;
        }
    }

    private setTemperatureFigure(): void {
        this.climateDataApiService.getTemperatureData().subscribe(
            data => {
                this.apiData = this.restrictDataItems(data);
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`], value[`month`]), 'MM/yyyy');
                });
                // const yArray1: any[] = this.apiData.map(value => {
                //     return value[`station`];
                // });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`land`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        // {
                        //     label: 'Temperatura odnotowywana na stacji',
                        //     data: yArray1,
                        //     fill: false,
                        //     borderColor: '#E50F0F',
                        // },
                        {
                            label: 'Odnotowana temperatura [\xB0C]',
                            data: yArray2,
                            fill: false,
                            borderColor: '#F24242',
                            backgroundColor: '#D00000'
                        }
                    ]
                };
                this.options = Object.assign(this.options, {
                    title: {
                        display: true,
                        text: ['Średnia anomalia ', 'temperatury na Ziemi'],
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value) => {
                                    return value + '\xB0C';
                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                lineHeight: 3
                            }
                        }]
                    }
                });
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );

    }

    private setCarbonDioxideFigure(): void {
        this.climateDataApiService.getCo2Data().subscribe(
            data => {
                this.apiData = this.restrictDataItems(data);
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`], value[`month`], value[`day`]), 'dd/MM/yy');
                });
                const yArray1: any[] = this.apiData.map(value => {
                    return value[`cycle`];
                });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`trend`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        {
                            label: 'Pomiar',
                            data: yArray1,
                            fill: false,
                            borderColor: '#8405D8'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = Object.assign(this.options, {
                    title: {
                        display: true,
                        text: ['Stężenie tlenku ', 'węgla (IV) na Ziemi'],
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value) => {
                                    return value + 'ppm';
                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                lineHeight: 3
                            }
                        }]
                    }
                });
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setMethaneFigure(): void {
        this.climateDataApiService.getMethaneData().subscribe(
            data => {
                this.apiData = this.restrictDataItems(data);
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`], value[`month`]), 'MM/yyyy');
                });
                const yArray1: any[] = this.apiData.map(value => {
                    return value[`average`];
                });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`trend`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        {
                            label: 'Pomiar',
                            data: yArray1,
                            fill: false,
                            borderColor: '#A20D3E'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = Object.assign(this.options, {
                    title: {
                        display: true,
                        text: ['Stężenie metanu ', 'na Ziemi'],
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value) => {
                                    return value + 'ppm';
                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                lineHeight: 3
                            }
                        }]
                    }
                });
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setNitrousOxideFigure(): void {
        this.climateDataApiService.getNitrousOxideData().subscribe(
            data => {
                this.apiData = this.restrictDataItems(data);
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`], value[`month`]), 'MM/yyyy');
                });
                const yArray1: any[] = this.apiData.map(value => {
                    return value[`average`];
                });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`trend`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        {
                            label: 'Pomiar',
                            data: yArray1,
                            fill: false,
                            borderColor: '#0B2BAB'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = Object.assign(this.options, {
                    title: {
                        display: true,
                        text: ['Stężenie tlenku ', 'azotu (I) na Ziemi'],
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value) => {
                                    return value + 'ppm';
                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                lineHeight: 3
                            }
                        }]
                    }
                });
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setArcticFigure(): void {
        this.climateDataApiService.getArcticData().subscribe(
            data => {
                this.apiData = this.restrictDataItems(data);
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`]), 'yyyy');
                });
                const yArray1: any[] = this.apiData.map(value => {
                    return value[`extent`];
                });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`area`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        {
                            label: 'Zasięg lodu',
                            data: yArray1,
                            fill: false,
                            borderColor: '#06AFB5'
                        },
                        {
                            label: 'Powierzchnia lodowca',
                            data: yArray2,
                            fill: false,
                            borderColor: '#A8411C'
                        }
                    ]
                };
                this.options = Object.assign(this.options, {
                    title: {
                        display: true,
                        text: ['Powierzchnia lodowca ', 'w Arktyce'],
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value) => {
                                    return value + 'x 10\u2076 km\u00B2';
                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                lineHeight: 3
                            }
                        }]
                    }
                });
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }
}
