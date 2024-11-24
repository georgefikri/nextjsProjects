import Counter from '@/components/Counter/Counter';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import Users from '@/components/Users/Users';
import { localization } from '@/consts/loadMessage';

export default  function LocalePage({ params }: { params: { locale: string } }) {
  const messages = localization(params.locale);
  const isRTL = params.locale === 'ar';

  return (
    <main>
       <header className="bg-blue-500 text-white p-4 flex">
        <div className="container mx-auto flex">
          <h1 className="text-3xl font-bold">{messages['myWebsite']}</h1>
          <div className={`flex items-center ${isRTL ? 'mr-auto' : 'ml-auto'}`}>

          <LanguageSwitcher />

          </div>
        </div>
      </header>

      <Counter />
      <Users />
    </main>
  );
}
