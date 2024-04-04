import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import { FormNewAnalysis } from '@/components/FormNewAnalysis/FormNewAnalysis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import styles from './NewAnalysisView.module.css';

export default function NewAnalysisView() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='new-analysis' />
      <div className={styles.view}>
        <div className={styles.header}>
          <h1 className='subtitle'>Nova análise</h1>
          <p className={styles.labelPlan}>
            <FontAwesomeIcon icon={faGratipay} />
            Plano gratuito
          </p>
        </div>
        <FormNewAnalysis />
      </div>
    </div>
  );
}
