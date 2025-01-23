import { Card, Col, Container, Row, Image } from "react-bootstrap"
import iamahero from "../Asset/Image/Horor/iamatomic.jpg"
import insidious from "../Asset/Image/Horor/insidious.jpg"
import themedium from "../Asset/Image/Horor/medium1.jpg"
import nope2 from "../Asset/Image/Horor/nope.jpg"
import recbaru from "../Asset/Image/Horor/recbaru.jpg"
import smile from "../Asset/Image/Horor/smilesweet.jpg"

const Horor = () => {
    return (
        <div>
            <br></br>
            <Container>
            <br></br>
            <h1 className="text-white">HORROR</h1>
                <Row>
                    <Col md={4} className="movieWrappper" id="horor">
                        <Card className="bg-dark movieImage">
                            <Image src={iamahero} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">I am A Hero</Card.Title>
                                <Card.Text className="text-left">
                                Hideo Suzuki merupakan asisten pembuat manga yang kehidupannya berjalan sangat payah. Suatu hari tersebar kabar bahwa ada wabah penyakit diikuti dengan tindakan panik dari warga Jepang sehingga mengabitkan kerusuhan di mana-mana.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={insidious} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Insidious</Card.Title>
                                <Card.Text className="text-left">
                                Josh dan dan Renai Lambert pindah ke sebuah mansion baru bersama ke-tiga anak mereka. Keadaan berubah mengerikan ketika Dalton dan anak mereka, terjatuh dan koma setelah serangan misterius di loteng.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={themedium} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">The Medium</Card.Title>
                                <Card.Text className="text-left">
                                Nim seorang dukun di daerah Isan - Thailand Utara mereka bertemu dengan keponakannya bernama Mink yang menunjukkan gejala aneh. Nampaknya Mink akan mewarisi bakat dukun dari keturunan keluarga mereka.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={nope2} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Nope</Card.Title>
                                <Card.Text className="text-left">
                                Setelah ayah mereka tewas akibat jatuhnya berbagai benda acak dari langit, kakak beradik pemilik peternakan, OJ dan Emerald Haywood berupaya merekam video bukti keberadaan UFO, dibantu oleh seorang penjual barang elektonik, Angel Torres dan pembuat film dokumenter, Antlers Holst.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={recbaru} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">REC</Card.Title>
                                <Card.Text className="text-left">
                                Seorang wartawan televisi dan juru kamera merekam video wabah mengerikan dari penyakit yang mengubah manusia menjadi kanibal ganas.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrappper">
                        <Card className="bg-dark movieImage">
                            <Image src={smile} alt="Tatakae" className="imagaes"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="stretched-link"></a>
                                <Card.Title className="text-center">Smile</Card.Title>
                                <Card.Text className="text-left">
                                Setelah menyaksikan kejadian yang aneh yang melibatkan seorang pasien, Dr. Rose Cotter mulai mengalami kejadian menakutkan yang tidak bisa dia jelaskan. Rose harus menghadapi masa lalunya yang bermasalah, disamping itu Ia juga berusaha untuk bertahan hidup dan melarikan diri dari kenyataan baru yang mengerikan.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Horor
