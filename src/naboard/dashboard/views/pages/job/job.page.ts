import { Component, OnInit } from '@angular/core';
import { LegendLabels, LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { DashboardService } from '../../../domains/services/dashboard.service';

@Component({
    selector: 'naboard-dashboard-job-page',
    templateUrl: './job.page.html',
})
export class JobPage implements OnInit {
    public totalVacancies = [
        { total: 4, province: 'Nusa Tenggara Barat (NTB)' },
        { total: 16, province: 'Kalimantan Tengah' },
        { total: 9, province: 'Kalimantan Selatan' },
        { total: 0, province: 'Gorontalo' },
        { total: 11, province: 'Lampung' },
        { total: 2, province: 'Nusa Tenggara Timur (NTT)' },
        { total: 2, province: 'Sulawesi Tenggara' },
        { total: 176, province: 'Banten' },
        { total: 34, province: 'Kalimantan Timur' },
        { total: 4, province: 'Bangka Belitung' },
        { total: 20, province: 'DI Yogyakarta' },
        { total: 23, province: 'Sumatera Barat' },
        { total: 30, province: 'Kepulauan Riau' },
        { total: 4, province: 'Nanggroe Aceh Darussalam (NAD)' },
        { total: 9, province: 'Sulawesi Utara' },
        { total: 1, province: 'Sulawesi Barat' },
        { total: 7, province: 'Sulawesi Tengah' },
        { total: 83, province: 'Jawa Timur' },
        { total: 7, province: 'Sumatera Selatan' },
        { total: 27, province: 'Kalimantan Barat' },
        { total: 39, province: 'Sumatera Utara' },
        { total: 118, province: 'Jawa Tengah' },
        { total: 11, province: 'Bengkulu' },
        { total: 25, province: 'Riau' },
        { total: 0, province: 'Maluku Utara' },
        { total: 111, province: 'Bali' },
        { total: 828, province: 'Jawa Barat' },
        { total: 4, province: 'Papua Barat' },
        { total: 9, province: 'Kalimantan Utara' },
        { total: 44, province: 'Maluku' },
        { total: 3, province: 'Papua' },
        { total: 1598, province: 'DKI Jakarta' },
        { total: 25, province: 'Sulawesi Selatan' },
        { total: 12, province: 'Jambi' },
    ];
    public totalPositions = [
        { total: 4664, position: 'Teknisi Dan Asisten Ahli' },
        { total: 4552, position: 'Tenaga Tata Usaha' },
        { total: 10277, position: 'Pekerja Kasar' },
        { total: 6897, position: 'Profesional' },
        { total: 9374, position: 'Tenaga Usaha Jasa Dan Usaha Penjualan' },
        { total: 20932, position: 'Operator Dan Perakit  Mesin' },
        { total: 4131, position: 'Pekerja Pengolahan, Kerajinan' },
        { total: 188, position: 'Pekerja Terampil Pertanian, Kehutanan Dan Perikanan' },
        { total: 9, position: 'Tni Dan Polri' },
        { total: 1964, position: 'Manajer' },
    ];
    public totalEducations = [
        { education: 'SD', total: 2947 },
        { education: 'SLTP', total: 9667 },
        { education: 'SLTA', total: 35932 },
        { education: 'D1', total: 336 },
        { education: 'D2', total: 38 },
        { education: 'D3', total: 5156 },
        { education: 'D4', total: 21 },
        { education: 'S1', total: 8608 },
        { education: 'S2', total: 263 },
        { education: 'S3', total: 20 },
    ];
    public totalDisabilities = {
        'Sulawesi Tenggara': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 62 }],
        Lampung: [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 30 }],
        'Sulawesi Tengah': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 8 }],
        'Kalimantan Barat': [{ status: 'Disabilitas', total: 10 }, { status: 'Normal', total: 245 }],
        'DKI Jakarta': [{ status: 'Disabilitas', total: 566 }, { status: 'Normal', total: 19032 }],
        'Bangka Belitung': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 9 }],
        'Sumatera Utara': [{ status: 'Disabilitas', total: 1 }, { status: 'Normal', total: 197 }],
        Banten: [{ status: 'Disabilitas', total: 30 }, { status: 'Normal', total: 2376 }],
        'Nusa Tenggara Timur (NTT)': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 7 }],
        'Sulawesi Barat': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 6 }],
        'Nanggroe Aceh Darussalam (NAD)': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 28 }],
        Riau: [{ status: 'Disabilitas', total: 50 }, { status: 'Normal', total: 88 }],
        Jambi: [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 315 }],
        'Papua Barat': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 1 }],
        'Sumatera Selatan': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 14 }],
        Gorontalo: [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 9 }],
        'Kalimantan Selatan': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 41 }],
        'Kepulauan Riau': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 1532 }],
        'Maluku Utara': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 0 }],
        'Kalimantan Utara': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 106 }],
        'Kalimantan Timur': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 244 }],
        Maluku: [{ status: 'Disabilitas', total: 2 }, { status: 'Normal', total: 140 }],
        'DI Yogyakarta': [{ status: 'Disabilitas', total: 504 }, { status: 'Normal', total: 174 }],
        Bali: [{ status: 'Disabilitas', total: 12 }, { status: 'Normal', total: 426 }],
        'Nusa Tenggara Barat (NTB)': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 6 }],
        'Sumatera Barat': [{ status: 'Disabilitas', total: 100 }, { status: 'Normal', total: 329 }],
        Bengkulu: [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 60 }],
        'Jawa Timur': [{ status: 'Disabilitas', total: 11 }, { status: 'Normal', total: 2432 }],
        Papua: [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 0 }],
        'Jawa Tengah': [{ status: 'Disabilitas', total: 2408 }, { status: 'Normal', total: 3069 }],
        'Jawa Barat': [{ status: 'Disabilitas', total: 927 }, { status: 'Normal', total: 27034 }],
        'Sulawesi Utara': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 65 }],
        'Kalimantan Tengah': [{ status: 'Disabilitas', total: 0 }, { status: 'Normal', total: 51 }],
        'Sulawesi Selatan': [{ status: 'Disabilitas', total: 100 }, { status: 'Normal', total: 131 }],
    };
    public totalGenders = {
        'Sulawesi Tenggara': [{ gender: 'Laki - Laki', total: 61 }, { gender: 'Perempuan', total: 1 }],
        Lampung: [{ gender: 'Laki - Laki', total: 23 }, { gender: 'Perempuan', total: 7 }],
        'Sulawesi Tengah': [{ gender: 'Laki - Laki', total: 7 }, { gender: 'Perempuan', total: 1 }],
        'Kalimantan Barat': [{ gender: 'Laki - Laki', total: 250 }, { gender: 'Perempuan', total: 5 }],
        'DKI Jakarta': [{ gender: 'Laki - Laki', total: 14861 }, { gender: 'Perempuan', total: 4737 }],
        'Bangka Belitung': [{ gender: 'Laki - Laki', total: 7 }, { gender: 'Perempuan', total: 2 }],
        'Sumatera Utara': [{ gender: 'Laki - Laki', total: 184 }, { gender: 'Perempuan', total: 14 }],
        Banten: [{ gender: 'Laki - Laki', total: 1401 }, { gender: 'Perempuan', total: 1005 }],
        'Nusa Tenggara Timur (NTT)': [{ gender: 'Laki - Laki', total: 7 }, { gender: 'Perempuan', total: 0 }],
        'Sulawesi Barat': [{ gender: 'Laki - Laki', total: 5 }, { gender: 'Perempuan', total: 1 }],
        'Nanggroe Aceh Darussalam (NAD)': [{ gender: 'Laki - Laki', total: 17 }, { gender: 'Perempuan', total: 11 }],
        Riau: [{ gender: 'Laki - Laki', total: 59 }, { gender: 'Perempuan', total: 79 }],
        Jambi: [{ gender: 'Laki - Laki', total: 278 }, { gender: 'Perempuan', total: 37 }],
        'Papua Barat': [{ gender: 'Laki - Laki', total: 1 }, { gender: 'Perempuan', total: 0 }],
        'Sumatera Selatan': [{ gender: 'Laki - Laki', total: 11 }, { gender: 'Perempuan', total: 3 }],
        Gorontalo: [{ gender: 'Laki - Laki', total: 4 }, { gender: 'Perempuan', total: 5 }],
        'Kalimantan Selatan': [{ gender: 'Laki - Laki', total: 39 }, { gender: 'Perempuan', total: 2 }],
        'Kepulauan Riau': [{ gender: 'Laki - Laki', total: 1064 }, { gender: 'Perempuan', total: 468 }],
        'Maluku Utara': [{ gender: 'Laki - Laki', total: 0 }, { gender: 'Perempuan', total: 0 }],
        'Kalimantan Utara': [{ gender: 'Laki - Laki', total: 45 }, { gender: 'Perempuan', total: 61 }],
        'Kalimantan Timur': [{ gender: 'Laki - Laki', total: 227 }, { gender: 'Perempuan', total: 17 }],
        Maluku: [{ gender: 'Laki - Laki', total: 108 }, { gender: 'Perempuan', total: 34 }],
        'DI Yogyakarta': [{ gender: 'Laki - Laki', total: 66 }, { gender: 'Perempuan', total: 612 }],
        Bali: [{ gender: 'Laki - Laki', total: 280 }, { gender: 'Perempuan', total: 158 }],
        'Nusa Tenggara Barat (NTB)': [{ gender: 'Laki - Laki', total: 3 }, { gender: 'Perempuan', total: 3 }],
        'Sumatera Barat': [{ gender: 'Laki - Laki', total: 199 }, { gender: 'Perempuan', total: 230 }],
        Bengkulu: [{ gender: 'Laki - Laki', total: 59 }, { gender: 'Perempuan', total: 1 }],
        'Jawa Timur': [{ gender: 'Laki - Laki', total: 451 }, { gender: 'Perempuan', total: 1992 }],
        Papua: [{ gender: 'Laki - Laki', total: 0 }, { gender: 'Perempuan', total: 0 }],
        'Jawa Tengah': [{ gender: 'Laki - Laki', total: 930 }, { gender: 'Perempuan', total: 4547 }],
        'Jawa Barat': [{ gender: 'Laki - Laki', total: 14535 }, { gender: 'Perempuan', total: 13426 }],
        'Sulawesi Utara': [{ gender: 'Laki - Laki', total: 47 }, { gender: 'Perempuan', total: 18 }],
        'Kalimantan Tengah': [{ gender: 'Laki - Laki', total: 23 }, { gender: 'Perempuan', total: 28 }],
        'Sulawesi Selatan': [{ gender: 'Laki - Laki', total: 220 }, { gender: 'Perempuan', total: 11 }],
    };

    public disabilities = [];
    public genders = [];

    public labels: LegendLabels = {
        content: (label: LegendLabelsContentArgs): string => {
            return `${label.text}: ${label.series.data[0]}`;
        },
    };

    public constructor(private service: DashboardService) {
        this.buildDisabilities();
        this.buildGender();
    }

    public ngOnInit(): void {
        this.service.fetchData().subscribe((results: any) => {
            this.buildGender();
        });
    }

    public labelContent(e: any): string {
        return `${(e.percentage * 100).toFixed(1)}%`;
    }

    public buildDisabilities(): void {
        let totalDisaiblity = 0;
        let totalNormal = 0;
        Object.values(this.totalDisabilities).forEach(([disabilitas, normal]) => {
            totalDisaiblity += disabilitas.total;
            totalNormal += normal.total;
        });

        this.disabilities.push({ status: 'Normal', total: totalNormal }, { status: 'Disabilitas', total: totalDisaiblity });
    }

    public buildGender(): void {
        let totalMale = 0;
        let totalFemale = 0;
        Object.values(this.totalGenders).forEach(([male, female]) => {
            totalMale += male.total;
            totalFemale += female.total;
        });

        this.genders.push({ status: 'Laki-laki', total: totalMale }, { status: 'Perempuan', total: totalFemale });
    }
}
