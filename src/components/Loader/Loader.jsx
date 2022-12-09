import Spinner from 'react-spinner-material';

export function Loader({ size, stroke }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Spinner
        radius={size || 30}
        color="#1976d2"
        stroke={stroke || 3}
        visible={true}
      />
    </div>
  );
}
