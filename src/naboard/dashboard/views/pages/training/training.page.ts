import { Component, OnInit } from '@angular/core';
import { LegendLabels, LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { DashboardService } from '../../../domains/services/dashboard.service';

@Component({
    selector: 'naboard-dashboard-training-page',
    templateUrl: './training.page.html',
})
export class TrainingPage implements OnInit {
    public isLG: boolean;
    public totalCapacityVocational = [{ total: 5893, category: 'Teknik Manukfaktur' }, { total: 4279, category: 'Teknik Las' }];
    public totalOfJobVacancyPlans = [
        { total: 3, province: 'Nusa Tenggara Barat (NTB)' },
        { total: 16, province: 'Kalimantan Tengah' },
        { total: 9, province: 'Kalimantan Selatan' },
        { total: 0, province: 'Gorontalo' },
        { total: 11, province: 'Lampung' },
        { total: 2, province: 'Nusa Tenggara Timur (NTT)' },
        { total: 2, province: 'Sulawesi Tenggara' },
        { total: 175, province: 'Banten' },
        { total: 34, province: 'Kalimantan Timur' },
        { total: 4, province: 'Bangka Belitung' },
        { total: 20, province: 'DI Yogyakarta' },
        { total: 23, province: 'Sumatera Barat' },
        { total: 30, province: 'Kepulauan Riau' },
        { total: 4, province: 'Nanggroe Aceh Darussalam (NAD)' },
        { total: 10, province: 'Sulawesi Utara' },
        { total: 1, province: 'Sulawesi Barat' },
        { total: 7, province: 'Sulawesi Tengah' },
        { total: 82, province: 'Jawa Timur' },
        { total: 7, province: 'Sumatera Selatan' },
        { total: 27, province: 'Kalimantan Barat' },
        { total: 39, province: 'Sumatera Utara' },
        { total: 118, province: 'Jawa Tengah' },
        { total: 11, province: 'Bengkulu' },
        { total: 25, province: 'Riau' },
        { total: 0, province: 'Maluku Utara' },
        { total: 108, province: 'Bali' },
        { total: 826, province: 'Jawa Barat' },
        { total: 3, province: 'Papua Barat' },
        { total: 9, province: 'Kalimantan Utara' },
        { total: 44, province: 'Maluku' },
        { total: 3, province: 'Papua' },
        { total: 1591, province: 'DKI Jakarta' },
        { total: 25, province: 'Sulawesi Selatan' },
        { total: 12, province: 'Jambi' },
    ];
    public totalOfInternships = [
        { total: 8, province: 'Nusa Tenggara Barat (NTB)' },
        { total: 25, province: 'Kalimantan Tengah' },
        { total: 17, province: 'Kalimantan Selatan' },
        { total: 0, province: 'Gorontalo' },
        { total: 4, province: 'Lampung' },
        { total: 2, province: 'Nusa Tenggara Timur (NTT)' },
        { total: 1, province: 'Sulawesi Tenggara' },
        { total: 113, province: 'Banten' },
        { total: 35, province: 'Kalimantan Timur' },
        { total: 1, province: 'Bangka Belitung' },
        { total: 19, province: 'DI Yogyakarta' },
        { total: 25, province: 'Sumatera Barat' },
        { total: 34, province: 'Kepulauan Riau' },
        { total: 2, province: 'Nanggroe Aceh Darussalam (NAD)' },
        { total: 6, province: 'Sulawesi Utara' },
        { total: 0, province: 'Sulawesi Barat' },
        { total: 4, province: 'Sulawesi Tengah' },
        { total: 91, province: 'Jawa Timur' },
        { total: 1, province: 'Sumatera Selatan' },
        { total: 16, province: 'Kalimantan Barat' },
        { total: 19, province: 'Sumatera Utara' },
        { total: 74, province: 'Jawa Tengah' },
        { total: 8, province: 'Bengkulu' },
        { total: 17, province: 'Riau' },
        { total: 0, province: 'Maluku Utara' },
        { total: 116, province: 'Bali' },
        { total: 499, province: 'Jawa Barat' },
        { total: 1, province: 'Papua Barat' },
        { total: 5, province: 'Kalimantan Utara' },
        { total: 19, province: 'Maluku' },
        { total: 2, province: 'Papua' },
        { total: 954, province: 'DKI Jakarta' },
        { total: 12, province: 'Sulawesi Selatan' },
        { total: 9, province: 'Jambi' },
    ];
    public businessCategory = [
        { category: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor', total: 190 },
        { category: 'Aktivitas Badan Internasional Dan Badan Ekstra Internasional Lainnya', total: 0 },
        { category: 'Industri Pengolahan', total: 335 },
        { category: 'Informasi Dan Komunikasi', total: 3 },
        { category: 'Pendidikan', total: 0 },
        { category: 'Aktivitas Profesional, Ilmiah Dan Teknis', total: 32 },
        { category: 'Aktivitas Jasa Lainnya', total: 1 },
        { category: 'Aktivitas Keuangan Dan Asuransi', total: 13 },
        { category: 'Konstruksi', total: 8 },
        { category: 'Pengangkutan Dan Pergudangan', total: 12 },
        { category: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum', total: 22 },
        { category: 'Pertanian, Kehutanan Dan Perikanan', total: 4 },
        { category: 'Pengelolaan Air, Pengelolaan Air Limbah, Pengelolaan Dan Daur Ulang Sampah, Dan Aktivitas Remediasi', total: 6 },
        { category: 'Kesenian, Hiburan Dan Rekreasi', total: 5 },
        { category: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib', total: 0 },
        {
            category:
                'Aktivitas Rumah Tangga Sebagai Pemberi Kerja; Aktivitas Yang Menghasilkan Barang Dan Jasa Oleh Rumah Tangga Yang Digunakan Untuk Memenuhi Kebutuhan Sendiri',
            total: 0,
        },
        { category: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial', total: 17 },
        { category: 'Pertambangan Dan Penggalian', total: 8 },
        {
            category:
                'Aktivitas Penyewaan Dan Sewa Guna Usaha Tanpa Hak Opsi, Ketenagakerjaan, Agen Perjalanan Dan Penunjang Usaha Lainnya',
            total: 26,
        },
        { category: 'Pengadaan Listrik, Gas, Uap/air Panas Dan Udara Dingin', total: 3 },
        { category: 'Real Estat', total: 12 },
    ];
    public totalVocationals = [
        { total: 5893, category: 'Teknik Manukfaktur' },
        { total: 4279, category: 'Teknik Las' },
        { total: 98, category: 'Perikanan' },
        { total: 6046, category: 'Metodologi Pelatihan' },
        { total: 3427, category: 'Teknik Listrik' },
        { total: 12021, category: 'Bisnis dan Managemen' },
        { total: 431, category: 'Agribisnis' },
        { total: 282, category: 'Pertanian' },
        { total: 6, category: 'Desain Batik' },
        { total: 3913, category: 'Teknologi dan Informasi Komunikasi' },
        { total: 175, category: 'Refrigeration' },
        { total: 4544, category: 'Pariwisata' },
        { total: 3103, category: 'Teknik Elektronika' },
        { total: 639, category: 'Industri Kreatif' },
        { total: 435, category: 'Pengembangan Sosial Masyarakat' },
        { total: 2779, category: 'Processing' },
        { total: 6, category: 'Pengolahan Kulit' },
        { total: 8134, category: 'Produktivitas' },
        { total: 4665, category: 'Bangunan' },
        { total: 289, category: 'Garmen Apparel' },
        { total: 51, category: 'Tata Kecantikan' },
        { total: 316, category: 'Tata Busana' },
        { total: 5536, category: 'Teknik Otomotif' },
    ];

    public totalInternships = [
        { total: 8, province: 'Nusa Tenggara Barat (NTB)' },
        { total: 25, province: 'Kalimantan Tengah' },
        { total: 17, province: 'Kalimantan Selatan' },
        { total: 0, province: 'Gorontalo' },
        { total: 4, province: 'Lampung' },
        { total: 2, province: 'Nusa Tenggara Timur (NTT)' },
        { total: 1, province: 'Sulawesi Tenggara' },
        { total: 113, province: 'Banten' },
        { total: 35, province: 'Kalimantan Timur' },
        { total: 1, province: 'Bangka Belitung' },
        { total: 19, province: 'DI Yogyakarta' },
        { total: 25, province: 'Sumatera Barat' },
        { total: 34, province: 'Kepulauan Riau' },
        { total: 2, province: 'Nanggroe Aceh Darussalam (NAD)' },
        { total: 6, province: 'Sulawesi Utara' },
        { total: 0, province: 'Sulawesi Barat' },
        { total: 4, province: 'Sulawesi Tengah' },
        { total: 91, province: 'Jawa Timur' },
        { total: 1, province: 'Sumatera Selatan' },
        { total: 16, province: 'Kalimantan Barat' },
        { total: 19, province: 'Sumatera Utara' },
        { total: 74, province: 'Jawa Tengah' },
        { total: 8, province: 'Bengkulu' },
        { total: 17, province: 'Riau' },
        { total: 0, province: 'Maluku Utara' },
        { total: 116, province: 'Bali' },
        { total: 500, province: 'Jawa Barat' },
        { total: 1, province: 'Papua Barat' },
        { total: 5, province: 'Kalimantan Utara' },
        { total: 19, province: 'Maluku' },
        { total: 2, province: 'Papua' },
        { total: 954, province: 'DKI Jakarta' },
        { total: 12, province: 'Sulawesi Selatan' },
        { total: 9, province: 'Jambi' },
    ];

    public totalPosition = [];

    public constructor(private service: DashboardService) {}

    public labels: LegendLabels = {
        content: (label: LegendLabelsContentArgs): string => {
            return `${label.text}: ${label.series.data[0]}`;
        },
    };

    public labelContent(e: any): string {
        return `${(e.percentage * 100).toFixed(1)}%`;
    }

    public ngOnInit(): void {
        this.service.fetchData().subscribe((results: any) => {
            this.totalPosition = results.data.positions;
        });
    }
}
