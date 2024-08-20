export default {
  regions: [
    {
      name: 'North Africa',
      countries: [
        {
          name: 'Egypt',
          currency: 'EGP',
          capital: 'Cairo',
          phoneCode: '+20',
          flag: '../../flags/egypt.svg',
          iso: 'EG',
          states: [
            {
              name: 'Cairo',
              lgas: ['LGA1', 'LGA2'],
            },
            {
              name: 'Giza',
              lgas: ['LGA3', 'LGA4'],
            },
          ],
        },
        {
          name: 'Libya',
          currency: 'LYD',
          capital: 'Tripoli',
          phoneCode: '+218',
          flag: '../../flags/libya.svg',
          iso: 'LY',
          states: [
            {
              name: 'Tripoli',
              lgas: ['LGA5', 'LGA6'],
            },
            {
              name: 'Benghazi',
              lgas: ['LGA7', 'LGA8'],
            },
          ],
        },
      ],
    },
    {
      name: 'West Africa',
      countries: [
        {
          name: 'Nigeria',
          currency: 'NGN',
          capital: 'Abuja',
          phoneCode: '+234',
          flag: '../../flags/nigeria.svg',
          iso: 'NG',
          states: [
            {
              name: 'Abia',
              lgas: ['Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umuahia South', 'Umu Nneochi']
            },
            {
              name: 'Adamawa',
              lgas: ['Demsa', 'Fufure', 'Ganye', 'Guyuk', 'Girei', 'Gombi', 'Hong', 'Jade', 'Lamurde', 'Madagali', 'Maiha', 'Mayo Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South']
            },
            {
              name: 'Akwa Ibom',
              lgas: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo']
            },
            {
              name: 'Anambra',
              lgas: ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South','Orumba North', 'Orumba South', 'Oyi' ]
            },
            {
              name: 'Lagos',
              lgas: ['LGA9', 'LGA10'],
            },
            {
              name: 'Kano',
              lgas: ['LGA11', 'LGA12'],
            },
          ],
        },
        {
          name: 'Ghana',
          currency: 'GHS',
          capital: 'Accra',
          phoneCode: '+233',
          flag: '../../flags/ghana.svg',
          iso: 'GH',
          states: [
            {
              name: 'Greater Accra',
              lgas: ['LGA13', 'LGA14'],
            },
            {
              name: 'Ashanti',
              lgas: ['LGA15', 'LGA16'],
            },
          ],
        },
      ],
    },
    {
      name: 'East Africa',
      countries: [
        {
          name: 'Kenya',
          currency: 'KES',
          capital: 'Nairobi',
          phoneCode: '+254',
          flag: '../../flags/kenya.svg',
          iso: 'KE',
          states: [
            {
              name: 'Nairobi',
              lgas: ['LGA17', 'LGA18'],
            },
            {
              name: 'Mombasa',
              lgas: ['LGA19', 'LGA20'],
            },
          ],
        },
        {
          name: 'Tanzania',
          currency: 'TZS',
          capital: 'Dodoma',
          phoneCode: '+255',
          flag: '../../flags/tanzania.svg',
          iso: 'TZ',
          states: [
            {
              name: 'Dar es Salaam',
              lgas: ['LGA21', 'LGA22'],
            },
            {
              name: 'Arusha',
              lgas: ['LGA23', 'LGA24'],
            },
          ],
        },
      ],
    },
    {
      name: 'Central Africa',
      countries: [
        {
          name: 'Cameroon',
          currency: 'XAF',
          capital: 'Yaoundé',
          phoneCode: '+237',
          flag: '../../flags/cameroon.svg',
          iso: 'CM',
          states: [
            {
              name: 'Douala',
              lgas: ['LGA25', 'LGA26'],
            },
            {
              name: 'Yaoundé',
              lgas: ['LGA27', 'LGA28'],
            },
          ],
        },
        {
          name: 'Gabon',
          currency: 'XAF',
          capital: 'Libreville',
          phoneCode: '+241',
          flag: '../../flags/gabon.svg',
          iso: 'GA',
          states: [
            {
              name: 'Libreville',
              lgas: ['LGA29', 'LGA30'],
            },
            {
              name: 'Port-Gentil',
              lgas: ['LGA31', 'LGA32'],
            },
          ],
        },
      ],
    },
    {
      name: 'Southern Africa',
      countries: [
        {
          name: 'South Africa',
          currency: 'ZAR',
          capital: 'Pretoria',
          phoneCode: '+27',
          flag: '../../flags/south-africa.svg',
          iso: 'ZA',
          states: [
            {
              name: 'Gauteng',
              lgas: ['LGA33', 'LGA34'],
            },
            {
              name: 'Western Cape',
              lgas: ['LGA35', 'LGA36'],
            },
          ],
        },
        {
          name: 'Namibia',
          currency: 'NAD',
          capital: 'Windhoek',
          phoneCode: '+264',
          flag: '../../flags/namibia.svg',
          iso: 'NA',
          states: [
            {
              name: 'Khomas',
              lgas: ['LGA37', 'LGA38'],
            },
            {
              name: 'Erongo',
              lgas: ['LGA39', 'LGA40'],
            },
          ],
        },
      ],
    },
  ],
}
