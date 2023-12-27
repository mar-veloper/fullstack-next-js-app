'use client'

import { CldUploadWidget, CldImage } from 'next-cloudinary'
import React from 'react'

interface CloudinaryUploadResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState('')
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Coffee image" />
      )}
      <CldUploadWidget
        uploadPreset="b734zaqa"
        options={{
          sources: ['local'],
          cropping: false,
          maxFiles: 5,
          multiple: true,
          styles: {
            palette: {
              window: '#F5F5F5',
              sourceBg: '#FFFFFF',
              windowBorder: '#90a0b3',
              tabIcon: '#0094c7',
              inactiveTabIcon: '#69778A',
              menuIcons: '#0094C7',
              link: '#53ad9d',
              action: '#8F5DA5',
              inProgress: '#0194c7',
              complete: '#53ad9d',
              error: '#c43737',
              textDark: '#000000',
              textLight: '#FFFFFF',
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: 'https://fonts.googleapis.com/css?family=Poppins',
                active: true,
              },
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return

          const info = result.info as CloudinaryUploadResult
          setPublicId(info.public_id)
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload files
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
