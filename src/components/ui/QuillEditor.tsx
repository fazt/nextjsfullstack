"use client"

import React, { forwardRef, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa el CSS de Quill
import { Input } from './Input';

export const QuillEditor = forwardRef<ReactQuill>((props, ref) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Esto actualiza el estado de isClient a true en el cliente después del primer renderizado
        setIsClient(typeof window !== 'undefined');
    }, []);

    if (!isClient) {
        return <Input />; // O cualquier otro placeholder mientras se carga en el cliente
    }

    const ReactQuill = require('react-quill'); // ReactQuill se requiere solo en el cliente

    return (
        <ReactQuill
            ref={ref}
            {...props}
            theme="snow"
        />
    );
});

QuillEditor.displayName = 'QuillEditor';
