import {MutableRefObject, useRef} from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Editor from "@monaco-editor/react";
import {Monaco} from "@monaco-editor/react";
import {editor} from "monaco-editor";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

export default function MonacoSample() {
    const monacoRef:MutableRefObject<IStandaloneCodeEditor | null> = useRef(null);

    function handleEditorWillMount(monaco: Monaco) {
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }

    function handleEditorDidMount(editor: IStandaloneCodeEditor, monaco: Monaco) {
        monacoRef.current = editor;
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Monaco Editor test</title>
            </Head>

            <Editor
                height="90vh"
                defaultLanguage="java"
                defaultValue="// some comment"
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                theme="vs-dark"
            />
        </div>
    )
}
