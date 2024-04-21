
        async function borrarProducto(id) {
            console.log('BORRANDO LA ID:', id);
        
            try {
                const response = await fetch(`http://${location.hostname}:${location.port}/api/product/removeCart/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
        
                console.log('RESPONSE:', JSON.stringify(response));
        
                if (response.ok) {
                    const result = await Swal.fire({
                        title: "Estas seguro",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Si, eliminar"
                    });
        
                    if (result.isConfirmed) {
                        await Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            timer: 1500,
                            didClose: () => {
                                // Recargar la página después de que el usuario confirme
                                window.location.reload();
                                window.scrollTo(0, 0);
                            }
                        });
                    } else {
                        alert('Producto no borrado');
                    }
                } else {
                    alert('Ocurrió un error al borrar el producto');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error al realizar la operación');
            }
        }
      