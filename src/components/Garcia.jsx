const Garcia = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

        <div className="col">
          <div className="text-center mb-4">
            <div className="icon-square bg-primary text-white rounded-3 mb-3 p-3 fs-4 d-inline-flex justify-content-center align-items-center">
              📦
            </div>
            <h3>Inventory</h3>
            <p className="text-body-secondary">
              Manage your product stocks easily. Track available items,
              monitor low inventory levels, and update quantities in real time
              to keep your business organized and efficient.
            </p>
            <a href="#" className="btn btn-primary">
              Call to action
            </a>
          </div>
        </div>

        <div className="col">
          <div className="text-center mb-4">
            <div className="icon-square bg-primary text-white rounded-3 mb-3 p-3 fs-4 d-inline-flex justify-content-center align-items-center">
              👤
            </div>
            <h3>Contact</h3>
            <p className="text-body-secondary">
              Stay connected with your customers and team members. Access
              contact details, send updates, and manage communication in one
              convenient place.
            </p>
            <a href="#" className="btn btn-primary">
              Call to action
            </a>
          </div>
        </div>

        <div className="col">
          <div className="text-center mb-4">
            <div className="icon-square bg-primary text-white rounded-3 mb-3 p-3 fs-4 d-inline-flex justify-content-center align-items-center">
              ⚙️
            </div>
            <h3>Settings</h3>
            <p className="text-body-secondary">
              Customize your application preferences. Adjust account settings,
              manage security options, and configure system features according
              to your needs.
            </p>
            <a href="#" className="btn btn-primary">
              Call to action
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Garcia;