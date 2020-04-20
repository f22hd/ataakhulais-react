import React, { useState } from "react";
import CopyRight from "./copyright";
import VolunteerInvitationForm from "../volunteer/volunteer-invitation-form";
import { Modal } from "react-bootstrap";

function Footer() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const join = () => {
    // To do : show invitation form as modal
    const v = !isVisibleForm;
    setIsVisibleForm(v);
  };

  return (
    <div>
      <section className="text-center invitation-box">
        <div className="content">
          <h4 className="my-5">يمكنك المساهمة هنا واضافة بياناتك للقائمة</h4>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => join()}
          >
            انضم الآن
          </button>
        </div>
        {isVisibleForm && (
          <Modal show={isVisibleForm} onHide={() => setIsVisibleForm(false)}>
            <Modal.Header closeButton>
              <h4 className="modal-title pull-left">نموذج الانضمام للقائمة</h4>
            </Modal.Header>
            <Modal.Body>
              <VolunteerInvitationForm onHide={() => setIsVisibleForm(false)} />
            </Modal.Body>
          </Modal>
        )}
      </section>

      <CopyRight />
    </div>
  );
}

export default Footer;
