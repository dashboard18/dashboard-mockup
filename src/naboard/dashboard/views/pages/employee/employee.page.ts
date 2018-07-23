import { Component } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';

@Component({
    selector: 'naboard-dashboard-employee-page',
    templateUrl: './employee.page.html',
})
export class EmployeePage {
    public totalStatus = {
        'Nusa Tenggara Barat (NTB)': [
            { category: 'Nusa Tenggara Barat (NTB)', status: 'pkwt', total: 780 },
            { category: 'Nusa Tenggara Barat (NTB)', status: 'pkwtt', total: 964 },
        ],
        'Nanggroe Aceh Darussalam (NAD)': [
            { category: 'Nanggroe Aceh Darussalam (NAD)', status: 'pkwt', total: 655 },
            { category: 'Nanggroe Aceh Darussalam (NAD)', status: 'pkwtt', total: 453 },
        ],
        'Kalimantan Tengah': [
            { category: 'Kalimantan Tengah', status: 'pkwt', total: 4378 },
            { category: 'Kalimantan Tengah', status: 'pkwtt', total: 2732 },
        ],
        'Sumatera Barat': [
            { category: 'Sumatera Barat', status: 'pkwt', total: 4465 },
            { category: 'Sumatera Barat', status: 'pkwtt', total: 3058 },
        ],
        'Kepulauan Riau': [
            { category: 'Kepulauan Riau', status: 'pkwt', total: 8356 },
            { category: 'Kepulauan Riau', status: 'pkwtt', total: 4959 },
        ],
        'Kalimantan Selatan': [
            { category: 'Kalimantan Selatan', status: 'pkwt', total: 1900 },
            { category: 'Kalimantan Selatan', status: 'pkwtt', total: 3579 },
        ],
        Gorontalo: [{ category: 'Gorontalo', status: 'pkwt', total: 125 }, { category: 'Gorontalo', status: 'pkwtt', total: 38 }],
        'Jawa Timur': [{ category: 'Jawa Timur', status: 'pkwt', total: 19715 }, { category: 'Jawa Timur', status: 'pkwtt', total: 16790 }],
        'Sulawesi Tengah': [
            { category: 'Sulawesi Tengah', status: 'pkwt', total: 1675 },
            { category: 'Sulawesi Tengah', status: 'pkwtt', total: 1356 },
        ],
        'Sumatera Utara': [
            { category: 'Sumatera Utara', status: 'pkwt', total: 6127 },
            { category: 'Sumatera Utara', status: 'pkwtt', total: 8834 },
        ],
        'Kalimantan Barat': [
            { category: 'Kalimantan Barat', status: 'pkwt', total: 3133 },
            { category: 'Kalimantan Barat', status: 'pkwtt', total: 3553 },
        ],
        Lampung: [{ category: 'Lampung', status: 'pkwt', total: 1926 }, { category: 'Lampung', status: 'pkwtt', total: 1816 }],
        'Sumatera Selatan': [
            { category: 'Sumatera Selatan', status: 'pkwt', total: 1583 },
            { category: 'Sumatera Selatan', status: 'pkwtt', total: 822 },
        ],
        'Sulawesi Barat': [
            { category: 'Sulawesi Barat', status: 'pkwt', total: 26 },
            { category: 'Sulawesi Barat', status: 'pkwtt', total: 3 },
        ],
        'Sulawesi Utara': [
            { category: 'Sulawesi Utara', status: 'pkwt', total: 2070 },
            { category: 'Sulawesi Utara', status: 'pkwtt', total: 1081 },
        ],
        'Jawa Tengah': [
            { category: 'Jawa Tengah', status: 'pkwt', total: 22460 },
            { category: 'Jawa Tengah', status: 'pkwtt', total: 78609 },
        ],
        Bengkulu: [{ category: 'Bengkulu', status: 'pkwt', total: 1254 }, { category: 'Bengkulu', status: 'pkwtt', total: 919 }],
        'Nusa Tenggara Timur (NTT)': [
            { category: 'Nusa Tenggara Timur (NTT)', status: 'pkwt', total: 349 },
            { category: 'Nusa Tenggara Timur (NTT)', status: 'pkwtt', total: 254 },
        ],
        'Sulawesi Tenggara': [
            { category: 'Sulawesi Tenggara', status: 'pkwt', total: 250 },
            { category: 'Sulawesi Tenggara', status: 'pkwtt', total: 75 },
        ],
        Banten: [{ category: 'Banten', status: 'pkwt', total: 25777 }, { category: 'Banten', status: 'pkwtt', total: 29750 }],
        'DI Yogyakarta': [
            { category: 'DI Yogyakarta', status: 'pkwt', total: 4492 },
            { category: 'DI Yogyakarta', status: 'pkwtt', total: 4804 },
        ],
        'Bangka Belitung': [
            { category: 'Bangka Belitung', status: 'pkwt', total: 664 },
            { category: 'Bangka Belitung', status: 'pkwtt', total: 180 },
        ],
        'Kalimantan Timur': [
            { category: 'Kalimantan Timur', status: 'pkwt', total: 2960 },
            { category: 'Kalimantan Timur', status: 'pkwtt', total: 2777 },
        ],
        Bali: [{ category: 'Bali', status: 'pkwt', total: 8593 }, { category: 'Bali', status: 'pkwtt', total: 8934 }],
        Riau: [{ category: 'Riau', status: 'pkwt', total: 4314 }, { category: 'Riau', status: 'pkwtt', total: 2252 }],
        'Maluku Utara': [
            { category: 'Maluku Utara', status: 'pkwt', total: 257 },
            { category: 'Maluku Utara', status: 'pkwtt', total: 120 },
        ],
        'Papua Barat': [{ category: 'Papua Barat', status: 'pkwt', total: 69 }, { category: 'Papua Barat', status: 'pkwtt', total: 67 }],
        'Jawa Barat': [
            { category: 'Jawa Barat', status: 'pkwt', total: 208613 },
            { category: 'Jawa Barat', status: 'pkwtt', total: 289436 },
        ],
        Maluku: [{ category: 'Maluku', status: 'pkwt', total: 1516 }, { category: 'Maluku', status: 'pkwtt', total: 1959 }],
        'Kalimantan Utara': [
            { category: 'Kalimantan Utara', status: 'pkwt', total: 2390 },
            { category: 'Kalimantan Utara', status: 'pkwtt', total: 1260 },
        ],
        'Sulawesi Selatan': [
            { category: 'Sulawesi Selatan', status: 'pkwt', total: 3631 },
            { category: 'Sulawesi Selatan', status: 'pkwtt', total: 1887 },
        ],
        Jambi: [{ category: 'Jambi', status: 'pkwt', total: 2786 }, { category: 'Jambi', status: 'pkwtt', total: 3853 }],
        'DKI Jakarta': [
            { category: 'DKI Jakarta', status: 'pkwt', total: 192840 },
            { category: 'DKI Jakarta', status: 'pkwtt', total: 280740 },
        ],
        Papua: [{ category: 'Papua', status: 'pkwt', total: 209 }, { category: 'Papua', status: 'pkwtt', total: 30 }],
    };
    public totalGenders = {
        'Nusa Tenggara Barat (NTB)': [
            { category: 'Nusa Tenggara Barat (NTB)', gender: 'Laki - Laki', total: 1304 },
            { category: 'Nusa Tenggara Barat (NTB)', gender: 'Perempuan', total: 440 },
        ],
        'Nanggroe Aceh Darussalam (NAD)': [
            { category: 'Nanggroe Aceh Darussalam (NAD)', gender: 'Laki - Laki', total: 881 },
            { category: 'Nanggroe Aceh Darussalam (NAD)', gender: 'Perempuan', total: 227 },
        ],
        'Kalimantan Tengah': [
            { category: 'Kalimantan Tengah', gender: 'Laki - Laki', total: 5646 },
            { category: 'Kalimantan Tengah', gender: 'Perempuan', total: 1464 },
        ],
        'Sumatera Barat': [
            { category: 'Sumatera Barat', gender: 'Laki - Laki', total: 5466 },
            { category: 'Sumatera Barat', gender: 'Perempuan', total: 2057 },
        ],
        'Kepulauan Riau': [
            { category: 'Kepulauan Riau', gender: 'Laki - Laki', total: 6719 },
            { category: 'Kepulauan Riau', gender: 'Perempuan', total: 6596 },
        ],
        'Kalimantan Selatan': [
            { category: 'Kalimantan Selatan', gender: 'Laki - Laki', total: 4728 },
            { category: 'Kalimantan Selatan', gender: 'Perempuan', total: 751 },
        ],
        Gorontalo: [{ category: 'Gorontalo', gender: 'Laki - Laki', total: 77 }, { category: 'Gorontalo', gender: 'Perempuan', total: 86 }],
        'Jawa Timur': [
            { category: 'Jawa Timur', gender: 'Laki - Laki', total: 25207 },
            { category: 'Jawa Timur', gender: 'Perempuan', total: 11298 },
        ],
        'Sulawesi Tengah': [
            { category: 'Sulawesi Tengah', gender: 'Laki - Laki', total: 2395 },
            { category: 'Sulawesi Tengah', gender: 'Perempuan', total: 636 },
        ],
        'Sumatera Utara': [
            { category: 'Sumatera Utara', gender: 'Laki - Laki', total: 11164 },
            { category: 'Sumatera Utara', gender: 'Perempuan', total: 3797 },
        ],
        'Kalimantan Barat': [
            { category: 'Kalimantan Barat', gender: 'Laki - Laki', total: 4715 },
            { category: 'Kalimantan Barat', gender: 'Perempuan', total: 1971 },
        ],
        Lampung: [{ category: 'Lampung', gender: 'Laki - Laki', total: 3115 }, { category: 'Lampung', gender: 'Perempuan', total: 627 }],
        'Sumatera Selatan': [
            { category: 'Sumatera Selatan', gender: 'Laki - Laki', total: 1849 },
            { category: 'Sumatera Selatan', gender: 'Perempuan', total: 556 },
        ],
        'Sulawesi Barat': [
            { category: 'Sulawesi Barat', gender: 'Laki - Laki', total: 22 },
            { category: 'Sulawesi Barat', gender: 'Perempuan', total: 7 },
        ],
        'Sulawesi Utara': [
            { category: 'Sulawesi Utara', gender: 'Laki - Laki', total: 2457 },
            { category: 'Sulawesi Utara', gender: 'Perempuan', total: 694 },
        ],
        'Jawa Tengah': [
            { category: 'Jawa Tengah', gender: 'Laki - Laki', total: 28321 },
            { category: 'Jawa Tengah', gender: 'Perempuan', total: 72748 },
        ],
        Bengkulu: [{ category: 'Bengkulu', gender: 'Laki - Laki', total: 1807 }, { category: 'Bengkulu', gender: 'Perempuan', total: 366 }],
        'Nusa Tenggara Timur (NTT)': [
            { category: 'Nusa Tenggara Timur (NTT)', gender: 'Laki - Laki', total: 426 },
            { category: 'Nusa Tenggara Timur (NTT)', gender: 'Perempuan', total: 177 },
        ],
        'Sulawesi Tenggara': [
            { category: 'Sulawesi Tenggara', gender: 'Laki - Laki', total: 264 },
            { category: 'Sulawesi Tenggara', gender: 'Perempuan', total: 61 },
        ],
        Banten: [{ category: 'Banten', gender: 'Laki - Laki', total: 39260 }, { category: 'Banten', gender: 'Perempuan', total: 16267 }],
        'DI Yogyakarta': [
            { category: 'DI Yogyakarta', gender: 'Laki - Laki', total: 4055 },
            { category: 'DI Yogyakarta', gender: 'Perempuan', total: 5241 },
        ],
        'Bangka Belitung': [
            { category: 'Bangka Belitung', gender: 'Laki - Laki', total: 656 },
            { category: 'Bangka Belitung', gender: 'Perempuan', total: 188 },
        ],
        'Kalimantan Timur': [
            { category: 'Kalimantan Timur', gender: 'Laki - Laki', total: 4460 },
            { category: 'Kalimantan Timur', gender: 'Perempuan', total: 1277 },
        ],
        Bali: [{ category: 'Bali', gender: 'Laki - Laki', total: 10986 }, { category: 'Bali', gender: 'Perempuan', total: 6541 }],
        Riau: [{ category: 'Riau', gender: 'Laki - Laki', total: 5487 }, { category: 'Riau', gender: 'Perempuan', total: 1079 }],
        'Maluku Utara': [
            { category: 'Maluku Utara', gender: 'Laki - Laki', total: 300 },
            { category: 'Maluku Utara', gender: 'Perempuan', total: 77 },
        ],
        'Papua Barat': [
            { category: 'Papua Barat', gender: 'Laki - Laki', total: 89 },
            { category: 'Papua Barat', gender: 'Perempuan', total: 47 },
        ],
        'Jawa Barat': [
            { category: 'Jawa Barat', gender: 'Laki - Laki', total: 303171 },
            { category: 'Jawa Barat', gender: 'Perempuan', total: 194878 },
        ],
        Maluku: [{ category: 'Maluku', gender: 'Laki - Laki', total: 2379 }, { category: 'Maluku', gender: 'Perempuan', total: 1096 }],
        'Kalimantan Utara': [
            { category: 'Kalimantan Utara', gender: 'Laki - Laki', total: 2091 },
            { category: 'Kalimantan Utara', gender: 'Perempuan', total: 1559 },
        ],
        'Sulawesi Selatan': [
            { category: 'Sulawesi Selatan', gender: 'Laki - Laki', total: 4322 },
            { category: 'Sulawesi Selatan', gender: 'Perempuan', total: 1196 },
        ],
        Jambi: [{ category: 'Jambi', gender: 'Laki - Laki', total: 4603 }, { category: 'Jambi', gender: 'Perempuan', total: 2036 }],
        'DKI Jakarta': [
            { category: 'DKI Jakarta', gender: 'Laki - Laki', total: 329632 },
            { category: 'DKI Jakarta', gender: 'Perempuan', total: 143948 },
        ],
        Papua: [{ category: 'Papua', gender: 'Laki - Laki', total: 187 }, { category: 'Papua', gender: 'Perempuan', total: 52 }],
    };
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
    public totalPositions = [
        { total: 139176, position: 'Teknisi Dan Asisten Ahli' },
        { total: 130344, position: 'Tenaga Tata Usaha' },
        { total: 165189, position: 'Profesional' },
        { total: 210063, position: 'Pekerja Kasar' },
        { total: 235030, position: 'Operator Dan Perakit  Mesin' },
        { total: 169180, position: 'Tenaga Usaha Jasa Dan Usaha Penjualan' },
        { total: 5157, position: 'Pekerja Terampil Pertanian, Kehutanan Dan Perikanan' },
        { total: 151651, position: 'Pekerja Pengolahan, Kerajinan' },
        { total: 1072, position: 'Tni Dan Polri' },
        { total: 91052, position: 'Manajer' },
    ];

    public males = [];
    public females = [];
    public pkwts = [];
    public pkwtts = [];

    public label = null;

    public constructor() {
        this.buildGender();
        this.buildStatus();
        this.buildLabel();
    }

    public labelContent(e: any): string {
        return `${(e.percentage * 100).toFixed(1)}%`;
    }

    public buildGender(): void {
        Object.values(this.totalGenders).forEach(([male, female]) => {
            this.males.push({ category: male.category, total: male.total });
            this.females.push({ category: female.category, total: female.total });
        });
    }

    public buildStatus(): void {
        Object.values(this.totalStatus).forEach(([pkwt, pkwtt]) => {
            this.pkwts.push({ category: pkwt.category, total: pkwt.total });
            this.pkwtts.push({ category: pkwtt.category, total: pkwtt.total });
        });
    }

    public buildLabel(): any {
        this.label = {
            content: (label: LegendLabelsContentArgs): string => {
                let total = 0;
                Object.values(this.totalGenders).forEach(([male, female]) => {
                    if (male.category === label.value) {
                        total += male.total;
                    }

                    if (female.category === label.value) {
                        total += female.total;
                    }
                });
                return `${label.value} [${total}]`;
            },
        };
    }
}
