// Simple example to add text to a document
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import docx from "docx";

const doc = new docx.Document({
    sections: [
        {
            properties: {},
            children: [
                new docx.Paragraph({
                    spacing: {
                        after: 0,
                        before: 0,
                    },
                    children: [new docx.TextRun("Hello World")],
                }),
                new docx.Paragraph({
                    spacing: {
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    },
                    children: [
                        new docx.TextRun(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis ex, aliquet et faucibus quis, euismod in odio. Fusce gravida tempor nunc sed lacinia. Nulla sed dolor fringilla, fermentum libero ut, egestas ex. Donec pellentesque metus non orci lacinia bibendum. Cras porta ex et mollis hendrerit. Suspendisse id lectus suscipit, elementum lacus eu, convallis felis. Fusce sed bibendum dolor, id posuere ligula. Aliquam eu elit ut urna eleifend vestibulum. Praesent condimentum at turpis sed scelerisque. Suspendisse porttitor metus nec vestibulum egestas. Sed in eros sapien. Morbi efficitur placerat est a consequat. Nunc bibendum porttitor mi nec tempus. Morbi dictum augue porttitor nisi sodales sodales.",
                        ),
                    ],
                }),
            ],
        },
    ],
});

docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});