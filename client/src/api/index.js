
function Api({student=[]}) {
  
  return (
    <>
      {student.map((data, index) => {
        if (data) {
          return (
            <div key={index}>
              <h1>{data.id}</h1>
              <h1>{data.FirstName}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default Api;
