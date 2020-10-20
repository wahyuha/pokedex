import Skeleton from 'react-loading-skeleton';
import styles from './styles.scss'

export default function LoadingSkeleton () {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="listWrapper">
        {[0, 1, 2, 3].map(item => {
          return (
            <div className="pokemonItem loaderSkeleton">
              <Skeleton width="100%" height="240px" />
            </div>
          )
        })}
      </div>
    </>
  )
}