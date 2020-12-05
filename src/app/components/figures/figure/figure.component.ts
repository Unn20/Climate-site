import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ClimateDataApiService} from '../../../services/climate-data-api.service';
import {DatePipe} from '@angular/common';
import {FigureTypeEnum} from '../../../enums/figure-type-enums';

@Component({
    selector: 'app-figure',
    templateUrl: './figure.component.html',
    styleUrls: ['./figure.component.css'],
    providers: [MessageService]
})
export class FigureComponent implements OnInit {
    @Input() dataType: FigureTypeEnum;
    public data: any;
    public options: any;
    private apiData: any[];

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
                this.setArcitcFigure();
                break;
            }
            default: {
                throw new Error('Unknown figure!');
            }
        }
    }

    public selectData(event): void {
        this.messageService.add({
            severity: 'info', summary: 'Data Selected',
            detail: this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

    private setTemperatureFigure(): void {
        this.climateDataApiService.getTemperatureData().subscribe(
            data => {
                this.apiData = data[`temperature`];
                const xArray: any[] = this.apiData.map(value => {
                    const d = value[`time`].split('.');
                    d[1] = '0.' + d[1];
                    d[1] = Math.floor(d[1] * 12);
                    return this.pipe.transform(new Date(d[0], d[1]), 'MM/yyyy');
                });
                const yArray1: any[] = this.apiData.map(value => {
                    return value[`station`];
                });
                const yArray2: any[] = this.apiData.map(value => {
                    return value[`land`];
                });
                this.data = {
                    labels: xArray,
                    datasets: [
                        {
                            label: 'Temperatura odnotowywana na stacji',
                            data: yArray1,
                            fill: false,
                            borderColor: '#E50F0F',
                        },
                        {
                            label: 'Temperatura odnotowywana na powierzchni',
                            data: yArray2,
                            fill: false,
                            borderColor: '#4bc0c0'
                        }
                    ]
                };
                this.options = {
                    title: {
                        display: true,
                        text: 'Średnia anomalia temperatury na Ziemii',
                        fontSize: 24
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value, index, values) => {
                                    return value + '\xB0C';
                                }
                            }
                        }]
                    }
                };
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setCarbonDioxideFigure(): void {
        this.climateDataApiService.getCo2Data().subscribe(
            data => {
                this.apiData = data[`co2`];
                const xArray: any[] = this.apiData.map(value => {
                    return this.pipe.transform(new Date(value[`year`], value[`month`] - 1, value[`day`]), 'dd/MM/yy');
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
                            borderColor: '#4bc0c0'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = {
                    title: {
                        display: true,
                        text: 'Stężenie dwutlenku węgla na Ziemii',
                        fontSize: 24
                    },
                    legend: {
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value, index, values) => {
                                    return value + 'ppm';
                                }
                            }
                        }]
                    }
                };
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setMethaneFigure(): void {
        this.climateDataApiService.getMethaneData().subscribe(
            data => {
                this.apiData = data[`methane`];
                const xArray: any[] = this.apiData.map(value => {
                    const d = value[`date`].split('.');
                    return this.pipe.transform(new Date(d[0], d[1] - 1), 'MM/yyyy');
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
                            borderColor: '#4bc0c0'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = {
                    title: {
                        display: true,
                        text: 'Stężenie metanu na Ziemii',
                        fontSize: 24
                    },
                    legend: {
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value, index, values) => {
                                    return value + 'ppm';
                                }
                            }
                        }]
                    }
                };
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setNitrousOxideFigure(): void {
        this.climateDataApiService.getNitrousOxideData().subscribe(
            data => {
                this.apiData = data[`nitrous`];
                const xArray: any[] = this.apiData.map(value => {
                    const d = value[`date`].split('.');
                    return this.pipe.transform(new Date(d[0], d[1] - 1), 'MM/yyyy');
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
                            borderColor: '#4bc0c0'
                        },
                        {
                            label: 'Trend',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = {
                    title: {
                        display: true,
                        text: 'Stężenie podtlenku azotu na Ziemii',
                        fontSize: 24
                    },
                    legend: {
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value, index, values) => {
                                    return value + 'ppm';
                                }
                            }
                        }]
                    }
                };
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }

    private setArcitcFigure(): void {
        this.climateDataApiService.getArcticData().subscribe(
            data => {
                this.apiData = data[`result`];
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
                            borderColor: '#4bc0c0'
                        },
                        {
                            label: 'Powierzchnia lodowca',
                            data: yArray2,
                            fill: false,
                            borderColor: '#565656'
                        }
                    ]
                };
                this.options = {
                    title: {
                        display: true,
                        text: 'Powierzchnia lodowca w Arktyce',
                        fontSize: 24
                    },
                    legend: {
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: (value, index, values) => {
                                    return value + 'x 10\u2076 km\u00B2';
                                }
                            }
                        }]
                    }
                };
            },
            error => {
                throw new Error('ERR: ' + error);
            }
        );
    }
}
