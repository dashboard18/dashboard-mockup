import { Component } from '@angular/core';
import { LegendLabels, LegendLabelsContentArgs, Series } from '@progress/kendo-angular-charts';

@Component({
    selector: 'naboard-dashboard-sector-page',
    templateUrl: './sector.page.html',
    styles: [
        `
            kendo-sparkline {
                height: 100px;
                width: 100%;
            }
        `,
    ],
})
export class SectorPage {
    labels: LegendLabels = {
        content: (label: LegendLabelsContentArgs): string => {
            return `${label.text}: ${label.series.data[0]}`;
        },
    };

    public totalCompanies = [
        { total: 138, province: 'Nusa Tenggara Barat (NTB)' },
        { total: 245, province: 'Kalimantan Tengah' },
        { total: 192, province: 'Kalimantan Selatan' },
        { total: 11, province: 'Gorontalo' },
        { total: 183, province: 'Lampung' },
        { total: 59, province: 'Nusa Tenggara Timur (NTT)' },
        { total: 57, province: 'Sulawesi Tenggara' },
        { total: 2173, province: 'Banten' },
        { total: 461, province: 'Kalimantan Timur' },
        { total: 74, province: 'Bangka Belitung' },
        { total: 289, province: 'DI Yogyakarta' },
        { total: 342, province: 'Sumatera Barat' },
        { total: 591, province: 'Kepulauan Riau' },
        { total: 91, province: 'Nanggroe Aceh Darussalam (NAD)' },
        { total: 120, province: 'Sulawesi Utara' },
        { total: 5, province: 'Sulawesi Barat' },
        { total: 88, province: 'Sulawesi Tengah' },
        { total: 1671, province: 'Jawa Timur' },
        { total: 177, province: 'Sumatera Selatan' },
        { total: 299, province: 'Kalimantan Barat' },
        { total: 456, province: 'Sumatera Utara' },
        { total: 1411, province: 'Jawa Tengah' },
        { total: 119, province: 'Bengkulu' },
        { total: 328, province: 'Riau' },
        { total: 21, province: 'Maluku Utara' },
        { total: 975, province: 'Bali' },
        { total: 8206, province: 'Jawa Barat' },
        { total: 36, province: 'Papua Barat' },
        { total: 45, province: 'Kalimantan Utara' },
        { total: 670, province: 'Maluku' },
        { total: 54, province: 'Papua' },
        { total: 15355, province: 'DKI Jakarta' },
        { total: 328, province: 'Sulawesi Selatan' },
        { total: 247, province: 'Jambi' },
    ];
    public totalOwnerships = [
        { ownership: 'Swasta', total: 24181 },
        { ownership: 'Persero', total: 7273 },
        { ownership: 'Perum', total: 40 },
        { ownership: 'Perusahaan Daerah', total: 145 },
        { ownership: 'Yayasan', total: 474 },
        { ownership: 'Koperasi', total: 259 },
        { ownership: 'Perseorangan', total: 2512 },
        { ownership: 'Patungan', total: 635 },
    ];
    public totalCapitals = [
        { total: 18571, capital: 'Swasta Nasional' },
        { total: 8544, capital: 'PMA' },
        { total: 1208, capital: 'Joint Venture' },
        { total: 7196, capital: 'PMDN' },
    ];
    public totalBusinessCategories = [
        {
            total: 13450,
            business_category: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor',
            name: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor',
        },
        {
            total: 17,
            business_category: 'Aktivitas Badan Internasional Dan Badan Ekstra Internasional Lainnya',
            name: 'Aktivitas Badan Internasional Dan Badan Ekstra Internasional Lainnya',
        },
        { total: 4358, business_category: 'Industri Pengolahan', name: 'Industri Pengolahan' },
        { total: 721, business_category: 'Informasi Dan Komunikasi', name: 'Informasi Dan Komunikasi' },
        { total: 390, business_category: 'Pendidikan', name: 'Pendidikan' },
        { total: 3568, business_category: 'Aktivitas Profesional, Ilmiah Dan Teknis', name: 'Aktivitas Profesional, Ilmiah Dan Teknis' },
        { total: 180, business_category: 'Aktivitas Jasa Lainnya', name: 'Aktivitas Jasa Lainnya' },
        { total: 4348, business_category: 'Aktivitas Keuangan Dan Asuransi', name: 'Aktivitas Keuangan Dan Asuransi' },
        { total: 524, business_category: 'Konstruksi', name: 'Konstruksi' },
        { total: 1358, business_category: 'Pengangkutan Dan Pergudangan', name: 'Pengangkutan Dan Pergudangan' },
        { total: 304, business_category: 'Pertanian, Kehutanan Dan Perikanan', name: 'Pertanian, Kehutanan Dan Perikanan' },
        {
            total: 1919,
            business_category: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum',
            name: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum',
        },
        {
            total: 338,
            business_category: 'Pengelolaan Air, Pengelolaan Air Limbah, Pengelolaan Dan Daur Ulang Sampah, Dan Aktivitas Remediasi',
            name: 'Pengelolaan Air, Pengelolaan Air Limbah, Pengelolaan Dan Daur Ulang Sampah, Dan Aktivitas Remediasi',
        },
        {
            total: 144,
            business_category: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib',
            name: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib',
        },
        { total: 161, business_category: 'Kesenian, Hiburan Dan Rekreasi', name: 'Kesenian, Hiburan Dan Rekreasi' },
        {
            total: 3,
            business_category:
                'Aktivitas Rumah Tangga Sebagai Pemberi Kerja; Aktivitas Yang Menghasilkan Barang Dan Jasa Oleh Rumah Tangga Yang Digunakan Untuk Memenuhi Kebutuhan Sendiri',
            name:
                'Aktivitas Rumah Tangga Sebagai Pemberi Kerja; Aktivitas Yang Menghasilkan Barang Dan Jasa Oleh Rumah Tangga Yang Digunakan Untuk Memenuhi Kebutuhan Sendiri',
        },
        {
            total: 351,
            business_category: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial',
            name: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial',
        },
        { total: 424, business_category: 'Pertambangan Dan Penggalian', name: 'Pertambangan Dan Penggalian' },
        {
            total: 1921,
            business_category:
                'Aktivitas Penyewaan Dan Sewa Guna Usaha Tanpa Hak Opsi, Ketenagakerjaan, Agen Perjalanan Dan Penunjang Usaha Lainnya',
            name: 'Aktivitas Penyewaan Dan Sewa Guna Usaha Tanpa Hak Opsi, Ketenagakerjaan, Agen Perjalanan Dan Penunjang Usaha Lainnya',
        },
        {
            total: 164,
            business_category: 'Pengadaan Listrik, Gas, Uap/air Panas Dan Udara Dingin',
            name: 'Pengadaan Listrik, Gas, Uap/air Panas Dan Udara Dingin',
        },
        { total: 876, business_category: 'Real Estat', name: 'Real Estat' },
    ];
    public totalStats = [
        { province: 'Nusa Tenggara Barat (NTB)', total_micro: 85, total_small: 31, total_medium: 17, total_big: 5 },
        { province: 'Kalimantan Tengah', total_micro: 149, total_small: 50, total_medium: 32, total_big: 14 },
        { province: 'Kalimantan Selatan', total_micro: 127, total_small: 26, total_medium: 23, total_big: 16 },
        { province: 'Gorontalo', total_micro: 6, total_small: 3, total_medium: 2, total_big: 0 },
        { province: 'Lampung', total_micro: 105, total_small: 46, total_medium: 26, total_big: 6 },
        { province: 'Sulawesi Tenggara', total_micro: 39, total_small: 14, total_medium: 4, total_big: 0 },
        { province: 'Nusa Tenggara Timur (NTT)', total_micro: 31, total_small: 23, total_medium: 4, total_big: 1 },
        { province: 'Bangka Belitung', total_micro: 44, total_small: 19, total_medium: 9, total_big: 2 },
        { province: 'Banten', total_micro: 1212, total_small: 494, total_medium: 346, total_big: 121 },
        { province: 'Kalimantan Timur', total_micro: 308, total_small: 83, total_medium: 57, total_big: 13 },
        { province: 'DI Yogyakarta', total_micro: 173, total_small: 51, total_medium: 49, total_big: 16 },
        { province: 'Kepulauan Riau', total_micro: 392, total_small: 121, total_medium: 61, total_big: 17 },
        { province: 'Sumatera Barat', total_micro: 220, total_small: 56, total_medium: 48, total_big: 18 },
        { province: 'Nanggroe Aceh Darussalam (NAD)', total_micro: 59, total_small: 15, total_medium: 16, total_big: 1 },
        { province: 'Sulawesi Utara', total_micro: 66, total_small: 24, total_medium: 27, total_big: 3 },
        { province: 'Sulawesi Barat', total_micro: 3, total_small: 2, total_medium: 0, total_big: 0 },
        { province: 'Sulawesi Tengah', total_micro: 56, total_small: 13, total_medium: 14, total_big: 5 },
        { province: 'Jawa Timur', total_micro: 979, total_small: 348, total_medium: 267, total_big: 77 },
        { province: 'Sumatera Selatan', total_micro: 106, total_small: 42, total_medium: 24, total_big: 5 },
        { province: 'Kalimantan Barat', total_micro: 177, total_small: 70, total_medium: 40, total_big: 12 },
        { province: 'Sumatera Utara', total_micro: 253, total_small: 98, total_medium: 75, total_big: 30 },
        { province: 'Bengkulu', total_micro: 61, total_small: 27, total_medium: 28, total_big: 3 },
        { province: 'Jawa Tengah', total_micro: 869, total_small: 239, total_medium: 213, total_big: 90 },
        { province: 'Riau', total_micro: 183, total_small: 79, total_medium: 53, total_big: 13 },
        { province: 'Maluku Utara', total_micro: 11, total_small: 5, total_medium: 3, total_big: 2 },
        { province: 'Bali', total_micro: 572, total_small: 204, total_medium: 157, total_big: 42 },
        { province: 'Jawa Barat', total_micro: 4058, total_small: 1757, total_medium: 1542, total_big: 849 },
        { province: 'Papua Barat', total_micro: 29, total_small: 4, total_medium: 3, total_big: 0 },
        { province: 'Kalimantan Utara', total_micro: 28, total_small: 1, total_medium: 9, total_big: 7 },
        { province: 'Maluku', total_micro: 578, total_small: 57, total_medium: 31, total_big: 4 },
        { province: 'Papua', total_micro: 45, total_small: 6, total_medium: 2, total_big: 1 },
        { province: 'DKI Jakarta', total_micro: 7985, total_small: 3922, total_medium: 2536, total_big: 913 },
        { province: 'Jambi', total_micro: 138, total_small: 50, total_medium: 49, total_big: 11 },
        { province: 'Sulawesi Selatan', total_micro: 194, total_small: 69, total_medium: 51, total_big: 14 },
    ];
    public label = null;

    public series: Series[] = [
        {
            data: [1, 2, 3, 5, 3, 10, 8, 9, 6, 15, 14, 22],
            gap: 0.6,
            type: 'column',
            tooltip: {
                format: '{0:n} perusahaan',
            },
        },
    ];
    public seriesLine: Series[] = [
        {
            data: [1, 2, 3, 5, 3, 10, 8, 9, 6, 15, 14, 22],
            gap: 0.6,
            type: 'line',
            tooltip: {
                format: '{0:n} perusahaan',
            },
        },
    ];
    public seriesPie: Series[] = [
        {
            data: [1, 2, 3, 5, 3, 10, 8, 9, 6, 15, 14, 22],
            gap: 0.6,
            type: 'pie',
            tooltip: {
                format: '{0:n} perusahaan',
            },
        },
    ];
    public data: any[] = [
        {
            kind: 'Hydroelectric',
            share: 0.175,
        },
        {
            kind: 'Nuclear',
            share: 0.238,
        },
        {
            kind: 'Coal',
            share: 0.118,
        },
        {
            kind: 'Solar',
            share: 0.052,
        },
        {
            kind: 'Wind',
            share: 0.225,
        },
        {
            kind: 'Other',
            share: 0.192,
        },
    ];

    public constructor() {
        this.buildLabelStats();
    }

    public labelContent(e: any): string {
        return e.category;
    }

    public donutLabelContent(e: any): string {
        return `${(e.percentage * 100).toFixed(1)}%`;
    }

    public buildLabelStats(): void {
        this.label = {
            content: (label: LegendLabelsContentArgs): string => {
                let total = 0;
                this.totalStats.forEach(item => {
                    if (item.province === label.value) {
                        total += item.total_big + item.total_medium + item.total_micro + item.total_small;
                    }
                });
                return `${label.value} [${total}]`;
            },
        };
    }
}
