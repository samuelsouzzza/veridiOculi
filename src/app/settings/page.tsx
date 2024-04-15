import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import { SelectBox } from '@/components/SelectBox/SelectBox';

export default function settingsPage() {
  return (
    <>
      <MenuNavHome />
      <div className={styles.container}>
        <div className={styles.view}>
          <h1 className='subtitle'>Configurações</h1>
          <ul>
            <li className={styles.optionBox}>
              <p>Alterar tema</p>
              <SelectBox
                id='selectTheme'
                label=''
                options={['Claro', 'Escuro']}
              />
            </li>
            <li>Tour pelo aplicativo</li>
            <li className={styles.optionBox}>
              <p>Receber atualizações via e-mail</p>
              <input type='checkbox' name='' id='' />
            </li>
            <li>Ler termos e condições</li>
            <li>Sair da minha conta</li>
          </ul>
        </div>
      </div>
    </>
  );
}
