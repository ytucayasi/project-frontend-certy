import React, { useEffect } from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

const CertificadoAuxiliar = ({ data }) => {
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
          }>ANEXO Nº 3A</Text>
          <Text>MODELO ÚNICO NACIONAL DE CERTIFICADO DE AUXILIAR TÉCNICO PARA IES</Text>
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
            Instituto de Educación Superior (público/privado)
          </Text>
          <Text style={{
            fontSize: 15,
            marginBottom: 15
          }}>
            “...........................”
          </Text>
          <Text style={{
            fontSize: 15,
            marginBottom: 5
          }}>
            CERTIFICADO DE AUXILIAR TÉCNICO
          </Text>
          <Text style={{
            fontSize: 15,
            marginBottom: 15
          }}>
            A NOMBRE DE LA NACIÓN
          </Text>
          <View style={{ textAlign: "rigth", marginBottom: 15 }}>
            <Text style={{ color: 'gray' }}>Otorgado a
              <Text style={{ color: 'blue'}}> DAVID MAMANI PARI </Text>
              Por haber aprobado satisfactoriamente el programa de estudios de
              <Text style={{ color: 'blue'}}> Modulo de todo </Text>
              desarrollado del
              <Text style={{ color: 'blue'}}> Modulo de todo </Text>
              con un total de
              <Text style={{ color: 'blue'}}> Modulo de todo </Text>
              créditos, equivalente a
              <Text style={{ color: 'blue'}}> Modulo de todo </Text>
              horas
            </Text>
          </View>
          <Text style={{ color: 'gray', textAlign: 'right', marginBottom: 40 }}>
            Lugar y fecha: ..................................
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
          <View style={{ marginBottom: 20 }}>
            <View style={styles.table}>
              <View style={styles.cellHead}><Text>Unidades de competencia</Text></View>
              <View style={styles.cellHead}><Text>Indicadores de logro</Text></View>
            </View>

            {data.map((item, index) => (
              <View key={index} style={styles.table}>
                <View style={styles.cell}>
                  <Text>{item.nombre}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{item.edad}</Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={{ marginBottom: 3 }}>
            Código de Registro Institucional
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
              width: "30%",
            }}>
              <Text style={{
                textAlign: "center"
              }}>N.° ________________</Text>
            </View>
          </View>
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
      </Page>
    </Document >
  )
}

export default CertificadoAuxiliar;