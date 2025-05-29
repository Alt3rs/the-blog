import { Button } from '@/components/Button';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16 flex flex-wrap gap-4'>
      <Button variant='default' type='submit'>
        Confirma
      </Button>
      <Button variant='ghost' type='submit'>
        Confirmar
      </Button>
      <Button variant='danger' type='submit'>
        Confirma
      </Button>
    </div>
  );
}
