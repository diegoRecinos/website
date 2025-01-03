'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://github.com/diegoRecinos/website/blob/main/public/files/cv.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
