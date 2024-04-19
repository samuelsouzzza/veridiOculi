import { NextRequest, NextResponse } from 'next/server';

const reports = [
  {
    id: 1345530,
    id_user: 88,
    dt_report: '2024/07/25',
    status: 'Pendente',
    data: [
      {
        id: 1,
        path: '/imgs/bg-01.svg',
        out_path: '/imgs/bg-01.svg',
        species_name: 'Bananeira',
        accuracy: 0.75,
        coordenates: {
          start_X: 2100,
          end_X: 2301,
          start_Y: 1567,
          end_Y: 1811,
        },
        status: 'pendente',
      },
      {
        id: 2,
        path: '/imgs/bg-01.svg',
        out_path: '/imgs/bg-01.svg',
        species_name: 'Bananeira',
        accuracy: 0.91,
        coordenates: {
          start_X: 2100,
          end_X: 2301,
          start_Y: 1567,
          end_Y: 1811,
        },
      },
    ],
  },
];

export async function GET(req: NextRequest, context: any) {
  const id = context.params.id;
  const report = reports.filter((r) => r.id === +id);

  if (!report) return NextResponse.json({ error: 'Não há dados' });

  return NextResponse.json(report);
}
