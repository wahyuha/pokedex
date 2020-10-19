import styles from './styles.scss'

const AppWrapper = ({ children }) => (
  <div className="container">
    <style jsx>{styles}</style>
    <div className="content">
      {children}
    </div>
  </div>
);

export default AppWrapper
