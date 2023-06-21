/* eslint-disable @typescript-eslint/ban-ts-comment */
import styles from './app.module.sass';

export const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img 
        src='/kubernetes.svg'
        width={128}
        height={128}
        alt='Kubernetes Logo'
      />
      <h1>Hello from <span>Kubernetes</span></h1>
      {/* @ts-ignore */}
      <p>Server IP: {global.ipAddress}</p>
    </div>
  );
};
