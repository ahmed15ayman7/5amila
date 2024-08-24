import useStore from '@/lib/zustand/store';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface Language {
  code: string;
  label: string;
  flag: string; 
}

const languages: Language[] = [
    { code: 'ar', label: 'ع', flag: '/images/ar.svg' },
  { code: 'en', label: 'En', flag: '/images/en.svg' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useStore();
  let pathName=usePathname()
    const router=useRouter()
    const changeLanguage = (lang: string) => {
        const currentPath = pathName // الحصول على المسار الحالي
        const newPath = `/${lang}${currentPath.substring(3)}`; // تعديل المسار حسب اللغة الجديدة
        setLanguage(lang);
        router.push(newPath);
      };

  const menu = (
    <Menu>
      {languages.map((lang) => (
        <Menu.Item key={lang.code} onClick={() => changeLanguage(lang.code)}>
          <div className="flex items-center">
            {lang.label}
            <Image src={lang.flag} alt={lang.label} width={24} height={24} className="mx-2" />
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>
        {languages.find((lang) => lang.code === language)?.label || 'Select Language'} 
        <Image src={languages.find((lang) => lang.code === language)?.flag||"/images/en.png"} alt={languages.find((lang) => lang.code === language)?.label|| 'Select Language'} width={24} height={24} className="mx-2" />
         {/* <DownOutlined /> */}
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;





