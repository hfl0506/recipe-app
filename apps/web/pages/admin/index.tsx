import Navbar from 'apps/web/components/Navbar';
import Sidebar from 'apps/web/components/Sidebar';
import UploadForm from 'apps/web/components/UploadForm';

function index() {
  return (
    <div>
      <UploadForm />
      <Sidebar />
    </div>
  );
}

export default index;
