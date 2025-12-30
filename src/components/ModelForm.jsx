import { useState } from "react";

const ModelForm = ({ isOpen, onSubmit, onClose, mode }) => {
  const [rate, setRate] = useState("");
  const [name, setName] = useState(""); // State for Name
  const [email, setEmail] = useState(""); // State for Email
  const [job, setJob] = useState(""); // State for Job
  const [status, setStatus] = useState(""); // State for Status

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "Edit" ? "Edit Client" : "Client Details"}
          </h3>

          <form method="dialog" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Job
              <input
                type="text"
                className="grow"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input input-bordered flex items-center my-4 gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>

              <select
                className="select select-bordered w-full mt-4 ml-2 max-w-xs"
                value={status ? "Active" : "Inactive"}
                onChange={handleStatusChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "Edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModelForm;
