import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      className={clsx('hero', styles.heroBanner)}
      style={{
        // Вычитаем только 60px (высоту navbar), чтобы блок занял весь экран без прокрутки
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
      }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ opacity: 0.8 }}>{siteConfig.tagline}</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/about"
            style={{ borderRadius: '8px', padding: '0.8rem 2rem' }}>
            О сервере
          </Link>
          
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/rules"
            style={{ borderRadius: '8px', padding: '0.8rem 2rem' }}>
            Правила
          </Link>

          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/plugins"
            style={{ borderRadius: '8px', padding: '0.8rem 2rem' }}>
            Плагины
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      noFooter={true}> {/* Этот параметр полностью отключает футер на данной странице */}
      <HomepageHeader />
    </Layout>
  );
}