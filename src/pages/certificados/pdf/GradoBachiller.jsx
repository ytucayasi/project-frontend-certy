import React, { useEffect } from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

const GradoBachiller = ({ data }) => {
  const styles = {
    table: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    cell: {
      borderWidth: 1,
      width: "100%",
      padding: 8,
    },
    cellHead: {
      borderWidth: 1,
      width: "100%",
      padding: 8,
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <Document>
      <Page size="A4">
        <View style={
          {
            color: "black",
            textAlign: "center",
            padding: "40px",
            fontSize: "10px",
          }
        }>
          <Text style={
            {
              marginBottom: 5,
            }
          }>ANEXO Nº 4A</Text>
          <Text>MODELO ÚNICO NACIONAL DE GRADO DE BACHILLER TÉCNICO PARA IES</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Image
              src='/images/logoupeu.png'
              style={{ maxWidth: 100, alignSelf: 'center', marginTop: 10 }}
            />
            <Image
              src='/images/escudo.png'
              style={{ maxWidth: 80, alignSelf: 'flex-start', marginTop: 10 }}
            />
            <Image
              src='/images/foto2.jpg'
              style={{ maxWidth: 70, maxHeight: 70, alignSelf: 'center', marginTop: 10 }}
            />
          </View>
          <Text style={
            {
              fontSize: 12,
            }
          }>
            REPÚBLICA DEL PERÚ
          </Text>
          <Text style={
            {
              fontSize: 15,
              marginBottom: 20
            }
          }>
            MINISTERIO DE EDUCACIÓN
          </Text>
          <Text style={{
            fontSize: 15,
            marginBottom: 10
          }}>
            A NOMBRE DE LA NACIÓN
          </Text>
          <View style={{ textAlign: "rigth", marginBottom: 15 }}>
            <Text style={{ color: 'gray', marginBottom: 30 }}>El director general del Instituto de Educación Superior (público/privado)
              <Text style={{ color: 'blue' }}> DAVID MAMANI PARI </Text>
              por cuanto
              <Text style={{ color: 'blue' }}> Hola como estas </Text>
              ha cumplido satisfactoriamente con las normas y disposiciones reglamentarias vigentes, le otorga el Grado de Bachiller Técnico de
              <Text style={{ color: 'blue' }}> Modulo de todo </Text>
            </Text>
            <Text style={{ color: 'black', textAlign: "left", marginLeft: 30, }}>
              POR TANTO:
            </Text>
            <Text style={{ color: 'black', textAlign: "left", marginLeft: 30, }}>
              Se expide el presente GRADO DE BACHILLER TÉCNICO para que se le reconozca como tal.
            </Text>
          </View>
          <Text style={{ color: 'gray', textAlign: 'right', marginBottom: 40 }}>
            Dado en los días ..................................
          </Text>
          <Text style={{ color: 'gray', textAlign: 'center', marginBottom: 5 }}>
            _______________________
          </Text>
          <Text style={{ textAlign: 'center', color: 'gray', marginBottom: 3 }}>
            DIRECTOR GENERAL
          </Text>
          <Text style={{ textAlign: 'center', color: 'gray', marginBottom: 20 }}>
            (sello, firma, posfirma)
          </Text>
          <View style={
            {
              justifyContent: 'center',
              width: "100%",
              flexDirection: 'row',
              marginBottom: 30
            }
          }>
            <View style={{
              borderWidth: 1,
              padding: 8,
              width: "40%",
            }}>
              <Text style={{ marginBottom: 3 }}>
                Código de Registro Institucional
              </Text>
              <Text style={{
                textAlign: "center",
                marginBottom: 20
              }}>N.° ________________</Text>
              <Text style={{ marginBottom: 3 }}>
                Código de Registro de MINEDU
              </Text>
              <Text style={{
                textAlign: "center",
                marginBottom: 20
              }}>N.° ________________</Text>  
              <Text style={{ color: 'gray', textAlign: 'center', marginBottom: 5 }}>
                _______________________
              </Text>
              <Text style={{ textAlign: 'center', color: 'black', marginBottom: 3 }}>
                DIRECTOR GENERAL
              </Text>
              <Text style={{ textAlign: 'center', color: 'black' }}>
                (sello, firma, posfirma)
              </Text>
            </View>
          </View>

        </View>
      </Page>
    </Document >
  )
}

export default GradoBachiller;